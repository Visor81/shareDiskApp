import { ActionIcon, Button, Flex, Group, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconX } from "@tabler/icons-react";

export interface SelectionInfoProps {
  enabledLinks: boolean;
  count: number;
  size: string;
  isLimitExceeded: boolean;
  onClose: () => void;
  onAttachFiles: () => void;
  onCreateLink: () => void;
}

export function SelectionInfo({
  enabledLinks,
  count,
  size,
  isLimitExceeded,
  onClose,
  onAttachFiles,
  onCreateLink,
}: SelectionInfoProps) {
  const isMobileMd = useMediaQuery("(max-width: 768px)");
  const isMobileSm = useMediaQuery("(max-width: 640px)");

  return (
    <>
      {isLimitExceeded && (
        <Group h={61} bg="yellow.4" px="md">
          <Text fz={13} c="dark.7" lh={1.4}>
            {`Общий объем отправляемых файлов превышает действующее ограничение
            (25 МБ). ${enabledLinks ? "Файлы можно отправить в виде ссылок на Р7-Диск." : ""}`}
          </Text>
        </Group>
      )}
      <Flex
        direction={isMobileSm ? "column" : "row"}
        align="center"
        justify={isMobileSm ? "center" : "space-between"}
        gap={6}
        bg="blue"
        c="#fff"
        px="md"
        h={76}
        w="100%"
      >
        <Group gap="xs">
          <ActionIcon onClick={onClose}>
            <IconX size={21} color="#fff" />
          </ActionIcon>
          <Text fz={isMobileMd ? 13 : 15}>
            Выбрано файлов: {count} ({size})
          </Text>
        </Group>
        <Group gap="xs">
          <Button
            size={isMobileMd ? "xs" : ""}
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
            {count === 1 ? 'Прикрепить файл' : 'Прикрепить файлы'}
          </Button>
          <Button
            disabled={!enabledLinks}
            size={isMobileMd ? "xs" : ""}
            variant="default"
            onClick={onCreateLink}
          >
            {count === 1 ? 'Добавить ссылку' : 'Добавить ссылки'}
          </Button>
        </Group>
      </Flex>
    </>
  );
}
