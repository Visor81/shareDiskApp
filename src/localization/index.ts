export type DynamicLocale = {
  [key: string]: string | number | boolean | DynamicLocale | DynamicLocale[];
};

const info: DynamicLocale = 
{
    en: {
        MyDocuments: 'My documents',
        Search: 'Search',
        Find: 'Find',
        SearchResults: 'Search results',
        ColumnName: 'Name',
        ColumnChanged: 'Changed',
        ColumnSize: 'Size',
        MaxSizeLimitPartOne: 'Total size of files sent exceeds the current limit (25 MB).',
        MaxSizeLimitPartTwo: 'Files can be sent as links to R7-Disk.',
        FilesSelected: 'Selected files',
        AttachFile: 'Attach file',
        AttachFiles: 'Attach files',
        AddLink: 'Add link',
        AddLinks: 'Add links'
    },
    ru: {
        MyDocuments: 'Мои документы',
        Search: 'Поиск',
        Find: 'Найти',
        SearchResults: 'Результаты поиска',
        ColumnName: 'Название',
        ColumnChanged: 'Изменен',
        ColumnSize: 'Размер',
        MaxSizeLimitPartOne: 'Общий объем отправляемых файлов превышает действующее ограничение (25 МБ).',
        MaxSizeLimitPartTwo: 'Файлы можно отправить в виде ссылок на Р7-Диск.',
        FilesSelected: 'Выбрано файлов',
        AttachFile: 'Прикрепить файл',
        AttachFiles: 'Прикрепить файлы',
        AddLink: 'Добавить ссылку',
        AddLinks: 'Добавить ссылки'
    }
}

export const localize = (locale: 'en' | 'ru' | undefined, section: string): string => {
    if (!locale) {
    const value = (info.ru as Record<string, string>)[section];
        return value || "";
    }

    const loc = info[`${locale}`] || "";
    if (!loc || typeof loc !== 'object' || Array.isArray(loc)) {
        return "";
    }

    const value = (loc as Record<string, unknown>)[section];
  
    if (typeof value !== 'string') {
        return "";
    }

    return value;
}