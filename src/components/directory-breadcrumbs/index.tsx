import { Directory, DirectoryParent } from "@/api";
import { localize } from "@/localization";
import { ActionIcon, Anchor, Breadcrumbs, Group, Menu } from "@mantine/core";
import { IconArrowUp, IconChevronRight, IconFolder } from "@tabler/icons-react";
import { useMemo } from "react";

const MAX_ITEMS = 3;

const rootDirectoriesConfig = [ 
  {
    name: 'docs',
    type: 16
  },
  {
    name: 'sharedToMe',
    type: 256
  },
  {
    name: 'sharedAccess',
    type: 8
  },
  {
    name: 'favorites',
    type: 512
  },
  {
    name: 'common',
    type: 4
  },
  {
    name: 'recycleBin',
    type: 134217728
  },
  {
    name: 'globalRecycleBin',
    type: 369098752
  },
  {
    name: 'recent',
    type: 2048
  },
  {
    name: 'link',
    type: -1
  },
  {
    name: 'fileDepot',
    type: 8192
  },
  {
    name: 'rooms',
    type: 4096
  },
  {
    name: 'room'
  }
];

interface BreadcrumbItem {
  id: number;
  title: string;
  type: number;
  children?: BreadcrumbItem[];
}

export interface DirectoryBreadcrumbsProps {
  directory: Directory | null;
  isSearch: boolean;
  onBack: () => void;
  onItemClick: (id: number) => void;
  locale?: 'en' | 'ru';
}

export function DirectoryBreadcrumbs({
  directory,
  isSearch,
  onBack,
  onItemClick,
  locale
}: DirectoryBreadcrumbsProps) {
  const items = useMemo(() => {
    if (isSearch)
      return [
        {
          id: 0,
          title: `${localize(locale, 'SearchResults')}`, 
          type: 0
        },
      ];

    if (!directory) return [];

    let parent: DirectoryParent | null = directory.Parent;

    const result: BreadcrumbItem[] = [
      {
        title: directory.Name,
        id: directory.Id,
        type: directory.Type
      },
    ];

    while (parent) {
      result.unshift({
        title: parent.Name,
        id: parent.Id,
        type: parent.Type || 0
      });

      parent = parent.Parent;
    }

    if (result.length > MAX_ITEMS) {
      const children = result.splice(1, result.length - MAX_ITEMS);
      result.splice(1, 0, { id: 0, title: "...", type: 0, children });
    }

    return result;
  }, [directory, isSearch]);

  return (
    <Group h={48} py={8} px="lg" styles={{ root: { flexShrink: 0 } }}>
      {items.length > 1 && (
        <ActionIcon
          variant="subtle"
          color="dimmed"
          size="sm"
          ml={-2}
          onClick={onBack}
        >
          <IconArrowUp stroke={1.2} size={16} />
        </ActionIcon>
      )}
      <Breadcrumbs
        separatorMargin={6}
        separator={<IconChevronRight stroke={1.2} size={17} />}
      >
        {items.map((item, index) =>
          item.children ? (
            <Menu key={index}>
              <Menu.Target>
                <Anchor c="dimmed" fz={14}>
                  ...
                </Anchor>
              </Menu.Target>
              <Menu.Dropdown>
                {item.children.map((item) => (
                  <Menu.Item
                    key={item.id}
                    c="dark"
                    fz={14}
                    leftSection={<IconFolder stroke={1.2} size={18} />}
                  >
                    {rootDirectoriesConfig?.some(el => el.type === item.type) ? localize(locale, rootDirectoriesConfig?.find(el => el.type === item.type)?.name || '') : item.title}
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>
          ) : (
            <Anchor
              key={index}
              truncate
              underline={item.id !== 0 ? "hover" : "never"}
              c={index === items.length - 1 ? "dark" : "dimmed"}
              fz={14}
              fw={index === items.length - 1 ? 500 : 400}
              maw={200}
              onClick={item.id === 0 ? undefined : () => onItemClick(item.id)}
            >
              {rootDirectoriesConfig?.some(el => el.type === item.type) ? localize(locale, rootDirectoriesConfig?.find(el => el.type === item.type)?.name || '') : item.title}
            </Anchor>
          )
        )}
      </Breadcrumbs>
    </Group>
  );
}
