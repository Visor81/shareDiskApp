import { http } from "@/network";
import {
  Directory,
  DocumentDirectoryRequestParams,
  DocumentDirectorySearchRequestParams,
  DocumentDirectorySearchResponse,
} from "./types";

export const getDirectory = (params?: DocumentDirectoryRequestParams) =>
  http.get<Directory[]>("v1/DocumentDirectory/Get", { params });

export const search = (params?: DocumentDirectorySearchRequestParams) =>
  http.get<DocumentDirectorySearchResponse>("v1/DocumentDirectory/Search", {
    params: { ...params, field: "All" },
  });
