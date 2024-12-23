import { GenerateLinkResponse } from '../api/link/types';
export interface ShareDiskProps {
    opened: boolean;
    enabledLinks?: boolean;
    onClose: () => void;
    onAttachFiles: (files: File[]) => void;
    onCreateLink: (items: GenerateLinkResponse[]) => void;
}
export declare function ShareDisk({ opened, enabledLinks, onClose, onAttachFiles, onCreateLink, }: ShareDiskProps): import("react/jsx-runtime").JSX.Element;
