import { Table, Checkbox, Group, Text, Box, Anchor } from "@mantine/core";

import { Directory, DirectoryDocument } from "@/api";
import { formatBytes } from "@/lib/format-bytes";

import { FileIcon } from "../file-icon";

import classes from "./styles.module.css";

export interface DirectoryTableProps {
  rows: (Directory | DirectoryDocument)[];
  selectedRowIds: number[];
  onOpenDir: (id: number) => void;
  onSelect: (ids: number[]) => void;
}

export function DirectoryTable({
  rows,
  selectedRowIds,
  onOpenDir,
  onSelect,
}: DirectoryTableProps) {
  const isAllChecked = rows.length === selectedRowIds.length;

  const isIndeterminate = !isAllChecked && !!selectedRowIds.length;

  const checkRowSelected = (id: number) => selectedRowIds.includes(id);

  const handleAllSelected = () =>
    onSelect(selectedRowIds.length ? [] : rows.map((row) => row.Id));

  const handleRowSelect = (id: number) =>
    onSelect(
      selectedRowIds.includes(id)
        ? selectedRowIds.filter((item) => item !== id)
        : selectedRowIds.concat(id)
    );

  return (
    <Table.ScrollContainer minWidth={760} h="100%">
      <Table stickyHeader verticalSpacing="xs" horizontalSpacing="lg">
        <Table.Thead>
          <Table.Tr>
            <Table.Th c="gray.6" fw={500} fz="xs" tt="uppercase">
              <Group gap="xs">
                <Checkbox
                  size="xs"
                  checked={isAllChecked}
                  indeterminate={isIndeterminate}
                  onChange={() => handleAllSelected()}
                />{" "}
                Название
              </Group>
            </Table.Th>
            <Table.Th c="gray.6" fw={500} fz="xs" tt="uppercase">
              Изменен
            </Table.Th>
            <Table.Th c="gray.6" fw={500} fz="xs" tt="uppercase">
              Размер
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows.map((row) => (
            <Table.Tr
              key={row.Id}
              className={
                classes.row +
                (checkRowSelected(row.Id) ? ` ${classes.highlight}` : "")
              }
              onMouseDown={
                "MimeType" in row ? () => handleRowSelect(row.Id) : undefined
              }
            >
              <Table.Td fz="sm">
                <Group gap="xs">
                  <Box h={16} w={16}>
                    {"MimeType" in row && (
                      <Checkbox
                        readOnly
                        size="xs"
                        checked={checkRowSelected(row.Id)}
                        className={classes.rowCheckbox}
                      />
                    )}
                  </Box>
                  <Group gap={10}>
                    <FileIcon
                      mimeType={"MimeType" in row ? row.MimeType : ""}
                    />
                    {"MimeType" in row ? (
                      <Text truncate c="gray.8" title={row.Name} maw={340}>
                        {row.Name}
                      </Text>
                    ) : (
                      <Anchor
                        truncate
                        c="gray.8"
                        title={row.Name}
                        fw={500}
                        maw={340}
                        onMouseDown={(event) => event.stopPropagation()}
                        onClick={() => onOpenDir(row.Id)}
                      >
                        {row.Name}
                      </Anchor>
                    )}
                  </Group>
                </Group>
              </Table.Td>
              <Table.Td fz="sm" c="dimmed">
                <span title={new Date(row.Timestamp).toLocaleString("ru-Ru")}>
                  {new Date(row.Timestamp).toLocaleString("ru-Ru")}
                </span>
              </Table.Td>
              <Table.Td fz="sm" c="dimmed">
                {"Size" in row
                  ? isNaN(+row.Size)
                    ? null
                    : formatBytes(+row.Size)
                  : "-"}
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
