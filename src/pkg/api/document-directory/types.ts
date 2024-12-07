import {
  DocumentDirectorySortField,
  DocumentDirectorySortOrder,
} from "./enums";

export interface DirectoryParent {
  Id: number;
  Name: string;
  OwnerId: number;
  ParentId: number | null;
  Parent: DirectoryParent | null;
  Type: number;
}

export interface DirectoryDocument {
  IsDirectory: false;
  Id: number;
  FileId: number;
  OriginalFileId: number;
  PreviewFileId: number | null;
  OwnerId: number;
  Name: string;
  Description: string;
  DirectoryId: number;
  Date: string;
  Timestamp: string;
  Status: number;
  Type: number;
  IsFavorite: boolean;
  IsRead: boolean;
  Size: number;
  MimeType: string;
  OriginalMimeType: string;
  OfflineFileId: number | null;
  Path: string | null;
  IsShared: boolean;
  AccessType: number;
  IsCurrent: boolean;
  ClosedTimestamp?: number;
}

export interface Directory {
  AccessType: number;
  IsDirectory: true;
  Id: number;
  Name: string;
  Description: string;
  Color: string | null;
  ParentId: number | null;
  Parent: DirectoryParent | null;
  IconId: number | null;
  Type: number;
  SendNotification: boolean;
  Order: number;
  Timestamp: string;
  OwnerId: number;
  IsShared: boolean;
  UserName: string | null;
  UserAvatar: string | null;
  UserInitials: string | null;
  Children: Directory[];
  Documents: DirectoryDocument[];
}

export interface DocumentDirectorySearchResponse {
  Directory: {
    Items: Directory[];
    TotalCount: number;
  };
  Document: {
    Items: DirectoryDocument[];
    TotalCount: number;
  };
}

export interface DocumentDirectoryRequestParams {
  id: string | number;
  sortField: DocumentDirectorySortField;
  sortOrder: DocumentDirectorySortOrder;
  uid?: string | null;
}

export interface DocumentDirectorySearchRequestParams {
  text: string;
}
