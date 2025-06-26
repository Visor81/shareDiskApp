import { http } from "@/network";
import { Settings } from "./types";


export const getSettings = () =>
  http.get<Settings>("v1/settings");
