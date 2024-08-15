import axios from "axios";

export const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetcher = (...arg: any) => fetch(arg).then((r) => r.json());
