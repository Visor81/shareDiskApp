import { useState } from "react";
import { ActionIcon, Button, Group, TextInput } from "@mantine/core";
import { IconSearch, IconX } from "@tabler/icons-react";

import LogoDrive from "@/icons/logo-drive.svg?react";
import LogoEnDrive from "@/icons/logo_eng.svg?react";
import LogoDriveFull from "@/icons/logo-drive-full.svg?react";
import { useMediaQuery } from "@mantine/hooks";
import { localize } from "@/localization";

export interface HeaderProps {
  onSearch: (value: string) => void;
  onClose: () => void;
  locale?: 'en' | 'ru';
}

export function Header({ onSearch, onClose, locale }: HeaderProps) {
  const [searchValue, setSearchValue] = useState("");

  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <Group
      gap={10}
      h={isMobile ? 48 : 64}
      pt={isMobile ? "xs" : ""}
      px="lg"
      styles={{ root: { flexShrink: 0 } }}
    >
      <Group mr="xs">{isMobile ? <LogoDrive /> : locale === 'ru' ? <LogoDriveFull /> : <LogoEnDrive />}</Group>
      <TextInput
        variant="filled"
        size="md"
        fz={16}
        maw={480}
        styles={{ root: { flexGrow: 1 } }}
        placeholder={`${localize(locale, 'Search')}`}
        value={searchValue}
        leftSection={<IconSearch stroke={1.2} />}
        rightSectionProps={{ style: { width: 110 } }}
        rightSection={
          !!searchValue && (
            <Group gap="xs">
              <ActionIcon
                variant="transparent"
                color="gray"
                onClick={() => {
                  setSearchValue("");
                  onSearch("");
                }}
              >
                <IconX stroke={1.2} size={22} />
              </ActionIcon>
              <Button
                variant="default"
                size="xs"
                bd="none"
                fz={12}
                onClick={() => onSearch(searchValue.trim())}
              >
                {`${localize(locale, 'Find')}`}
              </Button>
            </Group>
          )
        }
        onChange={(event) => setSearchValue(event.currentTarget.value)}
        onKeyDown={(event) =>
          event.key === "Enter" && onSearch(searchValue.trim())
        }
      />
      <ActionIcon
        variant="subtle"
        color="gray"
        ml="auto"
        size="lg"
        onClick={onClose}
      >
        <IconX size={25} stroke={1.2} />
      </ActionIcon>
    </Group>
  );
}
