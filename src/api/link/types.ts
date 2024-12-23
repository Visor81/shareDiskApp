import { AccessType } from "@/enums";
import { LinkLifeTimeType } from "./enums";

export interface GenerateLinkRequestParams {
  id: number;
  type: "Directory" | "Document";
  lifeTime: LinkLifeTimeType;
  accessType: AccessType;
  uid?: string;
  password?: string;
  expirationDate?: Date;
}

export interface GenerateLinkResponse {
  Url: string;
  InternalUrl: string;
  Uid: string;
  TempUid: string;
  Link: string;
  Version: number;
  DocServerUrl: string;
  UserId: string;
  Jwt: string;
  Payload: {
    type: string;
    documentType: string;
    lang: string;
    location: string;
    region: string;
    document: {
      title: string;
      url: string;
      fileType: string;
      key: string;
      info: {
        owner: string;
        uploaded: string;
      };
      permissions: {
        chat: boolean;
        comment: boolean;
        edit: boolean;
      };
    };
    editorConfig: {
      mode: string;
      lang: string;
      location: string;
      region: string;
      callbackUrl: string;
      user: {
        id: string;
        name: string;
        group: string;
      };
    };
  };
  ExpirationDate: string | null;
  HasPassword: boolean;
}
