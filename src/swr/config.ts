import { fetcher } from "@/http/request";
import { SWRConfiguration } from "swr";

export const SWRconfig: SWRConfiguration = {
  revalidateOnMount: false,
  refreshInterval: 0,
  fetcher: fetcher,
  onSuccess: (data, key, config) => {
    console.log("onSuccess", data, key, config);
  },
  onError: (key, config) => {
    console.log("error", key, config);
  },
};
