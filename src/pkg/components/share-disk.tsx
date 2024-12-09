import { useCallback, useEffect, useMemo, useState } from "react";

import { Box, MantineProvider, Modal } from "@mantine/core";
import { Header } from "./header";
import { DirectoryTable } from "./directory-table";
import { DirectoryBreadcrumbs } from "./directory-breadcrumbs";

import {
  Directory,
  DocumentDirectoryRequestParams,
  DocumentDirectorySearchResponse,
  DocumentDirectorySortField,
  DocumentDirectorySortOrder,
  DocumentDirectoryType,
  getDirectory,
  search,
} from "../api";
import { SelectionInfo } from "./selection-info";

const defaultRequestParams = {
  id: "",
  sortField: DocumentDirectorySortField.Id,
  sortOrder: DocumentDirectorySortOrder.Desc,
};

export interface ShareDiskProps {
  opened: boolean;
  onClose: () => void;
  onAttachFiles: () => void;
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
              count={selectedRowIds.length}
              onClose={() => setSelectedRowIds([])}
              onAttachFiles={() => {
                onAttachFiles();
                onClose();
              }}
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
