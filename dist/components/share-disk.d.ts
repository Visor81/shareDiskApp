export interface ShareDiskProps {
    opened: boolean;
    onClose: () => void;
    onAttachFiles: (files: File[]) => void;
    onCreateLink: () => void;
}
export declare function ShareDisk({ opened, onClose, onAttachFiles, onCreateLink, }: ShareDiskProps): import("react/jsx-runtime").JSX.Element;
