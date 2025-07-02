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
export declare function SelectionInfo({ enabledLinks, count, size, isLimitExceeded, onClose, onAttachFiles, onCreateLink, locale }: SelectionInfoProps): import("react/jsx-runtime").JSX.Element;
