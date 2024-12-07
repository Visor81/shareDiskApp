import { ActionIcon, Button, Group, Text } from "@mantine/core";
import { IconInfoCircle, IconX } from "@tabler/icons-react";

export interface SelectionInfoProps {
  count: number;
  onClose: () => void;
}

export function SelectionInfo({ count, onClose }: SelectionInfoProps) {
  return (
    <Group
      bg="blue"
      c="#fff"
      pos="absolute"
      left={0}
      bottom={0}
      px="md"
      h={64}
      w="100%"
    >
      <ActionIcon onClick={onClose}>
        <IconX />
      </ActionIcon>
      <Text>Выбрано: {count}</Text>
      <Group gap="xs" ml="auto">
        <Button variant="outline" color="#fff">
          Прикрепить файл
        </Button>
        <Button variant="default">Добавить ссылку</Button>
      </Group>
      <IconInfoCircle />
    </Group>
  );
}
