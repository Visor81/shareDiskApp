import { DirectoryDocument } from '../api';
import { GenerateLinkResponse } from '../api/link/types';
export interface ShareDiskProps {
    opened: boolean;
    enabledLinks?: boolean;
    onClose: () => void;
    onAttachFiles: (files: File[]) => void;
    onCreateLink: (items: {
        link: GenerateLinkResponse;
        item: DirectoryDocument;
    }[]) => void;
}
export declare function ShareDisk({ opened, enabledLinks, onClose, onAttachFiles, onCreateLink, }: ShareDiskProps): import("react/jsx-runtime").JSX.Element;
