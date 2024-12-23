import { Directory } from '../../api';
export interface DirectoryBreadcrumbsProps {
    directory: Directory | null;
    isSearch: boolean;
    onBack: () => void;
    onItemClick: (id: number) => void;
}
export declare function DirectoryBreadcrumbs({ directory, isSearch, onBack, onItemClick, }: DirectoryBreadcrumbsProps): import("react/jsx-runtime").JSX.Element;
