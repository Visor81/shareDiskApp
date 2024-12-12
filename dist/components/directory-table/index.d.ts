import { Directory, DirectoryDocument } from '../../api';
export interface DirectoryTableProps {
    rows: (Directory | DirectoryDocument)[];
    selectedRowIds: number[];
    onOpenDir: (id: number) => void;
    onSelect: (ids: number[]) => void;
}
export declare function DirectoryTable({ rows, selectedRowIds, onOpenDir, onSelect, }: DirectoryTableProps): import("react/jsx-runtime").JSX.Element;
