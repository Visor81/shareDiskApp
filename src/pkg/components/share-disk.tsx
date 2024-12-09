import { useCallback, useEffect, useMemo, useState } from "react";

import { Box, LoadingOverlay, MantineProvider, Modal } from "@mantine/core";
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

import { isAxiosError } from "axios";
import { http } from "@/network";

const defaultRequestParams = {
  id: "",
  sortField: DocumentDirectorySortField.Id,
  sortOrder: DocumentDirectorySortOrder.Desc,
};

export interface ShareDiskProps {
  opened: boolean;
  onClose: () => void;
  onAttachFiles: (files: File[]) => void;
  onCreateLink: () => void;
}

export function ShareDisk({
  opened,
  onClose,
  onAttachFiles,
  onCreateLink,
}: ShareDiskProps) {
  const [requestParams, setRequestParams] =
    useState<DocumentDirectoryRequestParams>(defaultRequestParams);

  const [directory, setDirectory] = useState<Directory | null>(null);
  const [searchData, setSearchData] =
    useState<DocumentDirectorySearchResponse | null>(null);

  const [selectedRowIds, setSelectedRowIds] = useState<number[]>([]);

  const [attachLoading, setAttachLoading] = useState(false);

  const rows = useMemo(() => {
    if (searchData) {
      return [...searchData.Directory.Items, ...searchData.Document.Items];
    }

    return [...(directory?.Children ?? []), ...(directory?.Documents ?? [])];
  }, [directory, searchData]);

  const fetchDirectory = useCallback(
    async (params: DocumentDirectoryRequestParams) => {
      const { data } = await getDirectory(params);
      setDirectory(data[0]);
      setSearchData(null);
    },
    []
  );

  const handleSearch = async (text: string) => {
    if (!text) {
      fetchDirectory(requestParams);
    } else {
      const { data } = await search({ text });
      setSearchData(data);
      setDirectory(null);
    }
  };

  const handleAttachFiles = async () => {
    setAttachLoading(true);

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
      setAttachLoading(false);
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
    <MantineProvider>
      <Modal
        centered
        withCloseButton={false}
        opened={opened}
        size={760}
        radius="lg"
        padding={0}
        onClose={() => {}}
      >
        <Box h={500} pos="relative">
          <LoadingOverlay visible={attachLoading} />
          <Header onSearch={handleSearch} onClose={onClose} />
          <DirectoryBreadcrumbs
            directory={directory}
            isSearch={!!searchData}
            onItemClick={(id) => fetchDirectory({ ...requestParams, id })}
          />
          <Box h="calc(100% - 64px - 48px)">
            <DirectoryTable
              rows={rows}
              selectedRowIds={selectedRowIds}
              onOpenDir={(id) => fetchDirectory({ ...requestParams, id })}
              onSelect={(ids) => setSelectedRowIds(ids)}
            />
          </Box>
          {!!selectedRowIds.length && (
            <SelectionInfo
              count={rows.length}
              onClose={() => setSelectedRowIds([])}
              onAttachFiles={handleAttachFiles}
              onCreateLink={() => {
                onCreateLink();
                onClose();
              }}
            />
          )}
        </Box>
      </Modal>
    </MantineProvider>
  );
}
