import { useCallback, useEffect, useMemo, useState } from "react";
import { Box, LoadingOverlay, MantineProvider, Modal } from "@mantine/core";
import { isAxiosError } from "axios";

import { Header } from "./header";
import { DirectoryTable } from "./directory-table";
import { DirectoryBreadcrumbs } from "./directory-breadcrumbs";

import {
  Directory,
  DirectoryDocument,
  DocumentDirectoryRequestParams,
  DocumentDirectorySearchResponse,
  DocumentDirectorySortField,
  DocumentDirectorySortOrder,
  DocumentDirectoryType,
  getDirectory,
  search,
} from "../api";
import { SelectionInfo } from "./selection-info";

import { http } from "@/network";
import { MAX_SIZE_ATTACHMENTS } from "@/config";
import { formatBytes } from "@/lib/format-bytes";
import { link } from "@/api/link";
import { AccessType } from "@/enums";
import { LinkLifeTimeType } from "@/api/link/enums";
import { GenerateLinkResponse } from "@/api/link/types";
import { useMediaQuery } from "@mantine/hooks";

const defaultRequestParams = {
  id: "",
  sortField: DocumentDirectorySortField.Id,
  sortOrder: DocumentDirectorySortOrder.Desc,
};

export interface ShareDiskProps {
  opened: boolean;
  enabledLinks?: boolean;
  maxSizeAttachments?: number;
  onClose: () => void;
  onAttachFiles: (files: File[]) => void;
  locale?: 'en' | 'ru',
  offsetSize?: number;
  onCreateLink: (
    items: { link: GenerateLinkResponse; item: DirectoryDocument }[]
  ) => void;
}

export function ShareDisk({
  opened,
  enabledLinks = false,
  maxSizeAttachments = MAX_SIZE_ATTACHMENTS,
  onClose,
  onAttachFiles,
  offsetSize = 0,
  onCreateLink,
  locale = 'en',
}: ShareDiskProps) {
  const [requestParams, setRequestParams] =
    useState<DocumentDirectoryRequestParams>(defaultRequestParams);

  const [directory, setDirectory] = useState<Directory | null>(null);
  const [searchData, setSearchData] =
    useState<DocumentDirectorySearchResponse | null>(null);
  const [isSearch, setIsSearch] = useState(false);

  const [selectedRowIds, setSelectedRowIds] = useState<number[]>([]);
  const [selectedRws, setSelectedRws] = useState<(Directory | DirectoryDocument)[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const isMobile = useMediaQuery("(max-width: 640px)");

  const rows = useMemo(() => {
    if (searchData) {
      return [...searchData.Directory.Items, ...searchData.Document.Items];
    }

    return [...(directory?.Children ?? []), ...(directory?.Documents ?? [])];
  }, [directory, searchData]);

  const selectedRows = useMemo(
    () => {
      let filteredRows = rows.filter((item) => selectedRowIds.includes(item.Id));
      const filteredRowsIds = filteredRows.map((row) => row.Id);

      const previousDirectorySelectedRows = selectedRws.filter(sr => !filteredRowsIds.includes(sr.Id));
      if (previousDirectorySelectedRows.length) {
        filteredRows = [...previousDirectorySelectedRows, ...filteredRows];
      }

      return filteredRows;
    },
    [rows, selectedRowIds, selectedRws]
  );

  const selectedRowsSize = useMemo(
    () => selectedRows.reduce((acc, item) => acc + item.Size, 0),
    [selectedRows]
  );

  const isLimitExceeded = offsetSize + selectedRowsSize > maxSizeAttachments;

  const fetchDirectory = useCallback(
    async (params: DocumentDirectoryRequestParams) => {
      setIsLoading(true);

      try {
        const { data } = await getDirectory(params);
        setDirectory(data[0]);
        setSearchData(null);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const handleSearch = async (text: string) => {
    if (!text) {
      await fetchDirectory(requestParams);
      setIsSearch(false);
    } else {
      setIsSearch(true);
      setIsLoading(true);
      try {
        const { data } = await search({ text });
        setSearchData(data);
        setDirectory(null);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleAttachFiles = async () => {
    setIsLoading(true);

    // const docs = rows.filter((row) =>
    //   selectedRowIds.includes(row.Id)
    // ) as DirectoryDocument[];
    const docs = selectedRows as DirectoryDocument[];

    try {
      const response = await Promise.all(
        docs.map((doc) =>
          http.get<Blob>(`/v1/Documents/Download?id=${doc.Id}&download=false`, {
            responseType: "blob",
          })
        )
      );

      const files = response.map(
        (item, index) =>
          new File([item.data], docs[index].Name, {
            type: item.headers["content-type"] ?? docs[index].MimeType,
          })
      );

      setSelectedRowIds([]);
      setSelectedRws([]);

      onAttachFiles(files);
      onClose();
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(
          error.response?.data?.ErrorMessage ?? "Неизвестная ошибка"
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateLinks = async () => {
    setIsLoading(true);

    try {
      const response = await Promise.all(
        selectedRows.map((row) =>
          link({
            id: row.Id,
            accessType: AccessType.Read,
            lifeTime: LinkLifeTimeType.Unlimited,
            type: "Document",
          })
        )
      );

      onCreateLink(
        response.map((item, index) => ({
          link: item.data,
          item: selectedRows[index] as DirectoryDocument,
        }))
      );
      onClose();
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (opened) {
      const load = async () => {
        const response = await getDirectory();
        // const respSettings = await getSettings();
        const docsId = response.data.find(
          (item) => item.Type === DocumentDirectoryType.Docs
        )!.Id;

        const newRequestParams = {
          id: docsId,
          sortField: DocumentDirectorySortField.Id,
          sortOrder: DocumentDirectorySortOrder.Desc,
        };

        setRequestParams(newRequestParams);
        // setSettings(respSettings.data);

        fetchDirectory(newRequestParams);
      };

      load();

      return () => {
        setRequestParams(defaultRequestParams);
        setDirectory(null);
        setSearchData(null);
        setSelectedRowIds([]);
        setSelectedRws([]);
      };
    }
  }, [opened, fetchDirectory]);

  return (
    <MantineProvider theme={{ fontFamily: "Roboto, sans-serif" }}>
      <Modal
        centered
        withCloseButton={false}
        closeOnEscape={false}
        opened={opened}
        size={950}
        radius="lg"
        padding={0}
        onClose={onClose}
      >
        <Box h={590} pos="relative">
          <LoadingOverlay visible={isLoading} />
          <Header onSearch={handleSearch} onClose={onClose} locale={locale}/>
          <DirectoryBreadcrumbs
            directory={directory}
            isSearch={isSearch}
            onBack={() =>
              fetchDirectory({
                ...requestParams,
                id: directory!.ParentId as number,
              })
            }
            onItemClick={(id) => fetchDirectory({ ...requestParams, id })}
            locale={locale}
          />
          <Box
            style={{
              height: `calc(100% - 48px - 64px - ${
                selectedRowIds.length ? 76 : 0
              }px  + ${isMobile ? 16 : 0}px - ${isLimitExceeded ? 61 : 0}px)`,
            }}
          >
            <DirectoryTable
              rows={rows}
              selectedRowIds={selectedRowIds}
              onOpenDir={(id) => fetchDirectory({ ...requestParams, id })}
              onSelect={(ids) => {
                setSelectedRowIds(ids);

                const currentDirectoryIds = rows?.map(r => r.Id);
                const previousDirectorySelectedRows = selectedRws.filter(sr => !currentDirectoryIds.includes(sr.Id));
                setSelectedRws(previousDirectorySelectedRows?.length ?
                [...previousDirectorySelectedRows, ...rows.filter((item) => ids.includes(item.Id))]  
                : rows.filter((item) => ids.includes(item.Id)));
              }}
              locale={locale}
            />
          </Box>
          {!!selectedRowIds.length && (
            <SelectionInfo
              enabledLinks={enabledLinks}
              count={selectedRowIds.length}
              size={formatBytes(selectedRowsSize, 2, locale)}
              isLimitExceeded={isLimitExceeded}
              onClose={() => {
                setSelectedRowIds([]);
                setSelectedRws([]);
              }}
              onAttachFiles={handleAttachFiles}
              onCreateLink={handleCreateLinks}
              locale={locale}
            />
          )}
        </Box>
      </Modal>
    </MantineProvider>
  );
}
