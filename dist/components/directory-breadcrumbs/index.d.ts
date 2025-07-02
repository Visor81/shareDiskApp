import { Directory } from '../../api';
export interface DirectoryBreadcrumbsProps {
    directory: Directory | null;
    isSearch: boolean;
    onBack: () => void;
    onItemClick: (id: number) => void;
    locale?: 'en' | 'ru';
}
export declare function DirectoryBreadcrumbs({ directory, isSearch, onBack, onItemClick, locale }: DirectoryBreadcrumbsProps): import("react/jsx-runtime").JSX.Element;
