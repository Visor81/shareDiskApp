import { useState } from "react";
import { ActionIcon, Group, TextInput } from "@mantine/core";
import { IconSearch, IconX } from "@tabler/icons-react";

import LogoDriveFull from "@/icons/logo-drive-full.svg?react";

export interface HeaderProps {
  onSearch: (value: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Group gap={10} h={64} px="lg" styles={{ root: { flexShrink: 0 } }}>
      <Group w={128}>
        <LogoDriveFull />
      </Group>
      <TextInput
        variant="filled"
        size="md"
        w={480}
        placeholder="Поиск"
        value={searchValue}
        leftSection={<IconSearch stroke={1.2} />}
        rightSection={
          !!searchValue && (
            <ActionIcon
              variant="transparent"
              color="gray"
              onClick={() => {
                setSearchValue("");
                onSearch("");
              }}
            >
              <IconX stroke={1.2} />
            </ActionIcon>
          )
        }
        onChange={(event) => setSearchValue(event.currentTarget.value)}
        onKeyDown={(event) =>
          event.key === "Enter" && onSearch(searchValue.trim())
        }
      />
      <ActionIcon variant="subtle" color="gray" ml="auto" size="lg">
        <IconX size={25} stroke={1.2} />
      </ActionIcon>
    </Group>
  );
}
