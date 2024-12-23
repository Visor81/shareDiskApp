import { AccessType } from "@/enums";
import { LinkLifeTimeType } from "./enums";

export interface LinkRequestParams {
  id: number;
  type: "Directory" | "Document";
  lifeTime: LinkLifeTimeType;
  accessType: AccessType;
  uid?: string;
  password?: string;
  expirationDate?: Date;
}
