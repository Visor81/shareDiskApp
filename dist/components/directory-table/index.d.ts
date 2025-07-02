import { Directory, DirectoryDocument } from '../../api';
export interface DirectoryTableProps {
    rows: (Directory | DirectoryDocument)[];
    selectedRowIds: number[];
    onOpenDir: (id: number) => void;
    onSelect: (ids: number[]) => void;
    locale?: 'en' | 'ru';
}
export declare function DirectoryTable({ rows, selectedRowIds, onOpenDir, onSelect, locale }: DirectoryTableProps): import("react/jsx-runtime").JSX.Element;
