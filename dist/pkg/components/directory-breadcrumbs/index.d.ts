import { Directory } from '../../api';
export interface DirectoryBreadcrumbsProps {
    directory: Directory | null;
    isSearch: boolean;
    onItemClick: (id: number) => void;
}
export declare function DirectoryBreadcrumbs({ directory, isSearch, onItemClick, }: DirectoryBreadcrumbsProps): import("react/jsx-runtime").JSX.Element;
