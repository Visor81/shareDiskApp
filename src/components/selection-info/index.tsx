import { ActionIcon, Button, Group, Text } from "@mantine/core";
import { IconInfoCircle, IconX } from "@tabler/icons-react";

export interface SelectionInfoProps {
  count: number;
  size: string;
  isLimitExceeded: boolean;
  onClose: () => void;
  onAttachFiles: () => void;
  onCreateLink: () => void;
}

export function SelectionInfo({
  count,
  size,
  isLimitExceeded,
  onClose,
  onAttachFiles,
  onCreateLink,
}: SelectionInfoProps) {
  return (
    <>
      {isLimitExceeded && (
        <Group h={41} bg="yellow.4" px="md">
          <Text fz={13} c="dark.7">
            Общий объем отправляемых файлов превышает действующее ограничение
            (25 МБ). Файлы можно отправить в виде ссылок на Р7-Диск.
          </Text>
        </Group>
      )}
      <Group gap="xs" bg="blue" c="#fff" px="md" h={76} w="100%">
        <ActionIcon onClick={onClose}>
          <IconX />
        </ActionIcon>
        <Text fz={15}>
          Выбрано файлов: {count} ({size})
        </Text>
        <Group gap="xs" ml="auto">
          <Button
            disabled={isLimitExceeded}
            variant="outline"
            color="#fff"
            onClick={onAttachFiles}
            styles={
              !isLimitExceeded
                ? {}
                : {
                    root: {
                      backgroundColor: "transparent",
                      color: "#fff",
                      border: "1px solid #fff",
                      opacity: 0.4,
                    },
                  }
            }
          >
            Прикрепить файл
          </Button>
          <Button variant="default" onClick={onCreateLink}>
            Добавить ссылки
          </Button>
        </Group>
        <IconInfoCircle />
      </Group>
    </>
  );
}
