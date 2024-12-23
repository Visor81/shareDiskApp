import { http } from "@/network";
import { LinkRequestParams } from "./types";

export const link = (requestParams: LinkRequestParams) => {
  const params = Object.fromEntries(
    Object.entries({
      ...requestParams,
      expirationDate: !requestParams.expirationDate
        ? undefined
        : requestParams.expirationDate.toJSON(),
    }).filter((item) => item[1] !== undefined)
  );

  return http.get("v1/Link/Generate", { params });
};
