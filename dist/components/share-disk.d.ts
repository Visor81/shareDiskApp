export interface ShareDiskProps {
    opened: boolean;
    enabledLinks?: boolean;
    onClose: () => void;
    onAttachFiles: (files: File[]) => void;
    onCreateLink: () => void;
}
export declare function ShareDisk({ opened, enabledLinks, onClose, onAttachFiles, onCreateLink, }: ShareDiskProps): import("react/jsx-runtime").JSX.Element;
