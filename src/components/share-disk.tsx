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

const defaultRequestParams = {
  id: "",
  sortField: DocumentDirectorySortField.Id,
  sortOrder: DocumentDirectorySortOrder.Desc,
};

export interface ShareDiskProps {
  opened: boolean;
  enabledLinks?: boolean;
  onClose: () => void;
  onAttachFiles: (files: File[]) => void;
  onCreateLink: () => void;
}

export function ShareDisk({
  opened,
  enabledLinks = false,
  onClose,
  onAttachFiles,
  onCreateLink,
}: ShareDiskProps) {
  const [requestParams, setRequestParams] =
    useState<DocumentDirectoryRequestParams>(defaultRequestParams);

  const [directory, setDirectory] = useState<Directory | null>(null);
  const [searchData, setSearchData] =
    useState<DocumentDirectorySearchResponse | null>(null);
  const [isSearch, setIsSearch] = useState(false);

  const [selectedRowIds, setSelectedRowIds] = useState<number[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const rows = useMemo(() => {
    if (searchData) {
      return [...searchData.Directory.Items, ...searchData.Document.Items];
    }

    return [...(directory?.Children ?? []), ...(directory?.Documents ?? [])];
  }, [directory, searchData]);

  const selectedRows = useMemo(
    () => rows.filter((item) => selectedRowIds.includes(item.Id)),
    [rows, selectedRowIds]
  );

  const selectedRowsSize = useMemo(
    () => selectedRows.reduce((acc, item) => acc + item.Size, 0),
    [selectedRows]
  );

  const isLimitExceeded = selectedRowsSize > MAX_SIZE_ATTACHMENTS;

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

    const docs = rows.filter((row) =>
      selectedRowIds.includes(row.Id)
    ) as DirectoryDocument[];

    try {
      const response = await Promise.all(
        docs.map((doc) =>
          http.get<Blob>(`/v1/Documents/Download?id=${doc.Id}&download=false`)
        )
      );

      const files = response.map(
        (item, index) =>
          new File([item.data], docs[index].Name, {
            type: item.headers["content-type"] ?? docs[index].MimeType,
          })
      );

      setSelectedRowIds([]);

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
      const links = await Promise.all(
        selectedRows.map((row) =>
          link({
            id: row.Id,
            accessType: AccessType.Read,
            lifeTime: LinkLifeTimeType.Unlimited,
            type: "MimeType" in row ? "Document" : "Directory",
          })
        )
      );

      console.log(links);

      onCreateLink();
      onClose();
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (opened) {
      const load = async () => {
        const response = await getDirectory();
        const docsId = response.data.find(
          (item) => item.Type === DocumentDirectoryType.Docs
        )!.Id;

        const newRequestParams = {
          id: docsId,
          sortField: DocumentDirectorySortField.Id,
          sortOrder: DocumentDirectorySortOrder.Desc,
        };

        setRequestParams(newRequestParams);

        fetchDirectory(newRequestParams);
      };

      load();

      return () => {
        setRequestParams(defaultRequestParams);
        setDirectory(null);
        setSearchData(null);
        setSelectedRowIds([]);
      };
    }
  }, [opened, fetchDirectory]);

  return (
    <MantineProvider theme={{ fontFamily: "Roboto, sans-serif" }}>
      <Modal
        centered
        withCloseButton={false}
        opened={opened}
        size={950}
        radius="lg"
        padding={0}
        onClose={() => {}}
      >
        <Box h={590} pos="relative">
          <LoadingOverlay visible={isLoading} />
          <Header onSearch={handleSearch} onClose={onClose} />
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
          />
          <Box
            style={{
              height: `calc(100% - 48px - 64px - ${
                selectedRowIds.length ? 76 : 0
              }px - ${isLimitExceeded ? 41 : 0}px)`,
            }}
          >
            <DirectoryTable
              rows={rows}
              selectedRowIds={selectedRowIds}
              onOpenDir={(id) => fetchDirectory({ ...requestParams, id })}
              onSelect={(ids) => setSelectedRowIds(ids)}
            />
          </Box>
          {!!selectedRowIds.length && (
            <SelectionInfo
              enabledLinks={enabledLinks}
              count={selectedRowIds.length}
              size={formatBytes(selectedRowsSize)}
              isLimitExceeded={isLimitExceeded}
              onClose={() => setSelectedRowIds([])}
              onAttachFiles={handleAttachFiles}
              onCreateLink={handleCreateLinks}
            />
          )}
        </Box>
      </Modal>
    </MantineProvider>
  );
}
