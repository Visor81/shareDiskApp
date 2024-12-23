import { http } from "@/network";
import { GenerateLinkRequestParams, GenerateLinkResponse } from "./types";

export const link = (requestParams: GenerateLinkRequestParams) => {
  const params = Object.fromEntries(
    Object.entries({
      ...requestParams,
      expirationDate: !requestParams.expirationDate
        ? undefined
        : requestParams.expirationDate.toJSON(),
    }).filter((item) => item[1] !== undefined)
  );

  return http.get<GenerateLinkResponse>("v1/Link/Generate", { params });
};
