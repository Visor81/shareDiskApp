import { DirectoryDocument } from '../api';
import { GenerateLinkResponse } from '../api/link/types';
export interface ShareDiskProps {
    opened: boolean;
    enabledLinks?: boolean;
    maxSizeAttachments?: number;
    onClose: () => void;
    onAttachFiles: (files: File[]) => void;
    offsetSize?: number;
    onCreateLink: (items: {
        link: GenerateLinkResponse;
        item: DirectoryDocument;
    }[]) => void;
}
export declare function ShareDisk({ opened, enabledLinks, maxSizeAttachments, onClose, onAttachFiles, offsetSize, onCreateLink, }: ShareDiskProps): import("react/jsx-runtime").JSX.Element;
