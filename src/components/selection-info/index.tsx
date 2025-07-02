import { localize } from "@/localization";
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
  locale?: 'en' | 'ru';
}

export function SelectionInfo({
  enabledLinks,
  count,
  size,
  isLimitExceeded,
  onClose,
  onAttachFiles,
  onCreateLink,
  locale
}: SelectionInfoProps) {
  const isMobileMd = useMediaQuery("(max-width: 768px)");
  const isMobileSm = useMediaQuery("(max-width: 640px)");

  return (
    <>
      {isLimitExceeded && (
        <Group h={61} bg="yellow.4" px="md">
          <Text fz={13} c="dark.7" lh={1.4}>
            {`${localize(locale, 'MaxSizeLimitPartOne')} ${enabledLinks ? localize(locale, 'MaxSizeLimitPartOne') : ""}`}
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
            {`${localize(locale, 'FilesSelected')}: ${count} (${size})`}
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
            {count === 1 ? localize(locale, 'AttachFile') : localize(locale, 'AttachFiles')}
          </Button>
          {enabledLinks && (<Button
            size={isMobileMd ? "xs" : ""}
            variant="default"
            onClick={onCreateLink}
          >
            {count === 1 ? localize(locale, 'AddLink') : localize(locale, 'AddLinks')}
          </Button>)}
        </Group>
      </Flex>
    </>
  );
}
