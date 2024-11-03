import axios from "axios";

import type { Response } from "../types";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Client-ID 7QaC31QWQatTvaiGVBFYsWoswGiVg-edIcET13XO0oA",
    Accept: "application/json",
    "Accept-Version": "v1",
  },
});

export const fetchImages = async (
  query: string,
  page = 1,
  perPage = 12
): Promise<Response> => {
  const CONFIG = {
    params: {
      query: query,
      page: page,
      per_page: perPage,
      content_filter: "low",
    },
  };
  const res: any = await instance.get<Response>("/", CONFIG);

  return res.data as Promise<Response>;
};
