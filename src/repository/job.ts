import { http } from "../utils/http";
import useSWR from "swr";
import useSWRInfinite from "swr";

const url= {
  baseJob: (page: number, location: string, description: string, full_time: boolean) => {
    let string_url = `/job?page=${page}`;

    if(location != '') {
      string_url = string_url+`&location=${location}`
    }
    if(description != '') {
      string_url = string_url+`&description=${description}`
    }
    if(full_time) {
      string_url = string_url+`&full_time=true`
    }

    return string_url;
  },
  basedIdJob: (id: string) => `/job/${id}`,
};

const hooks = {
  useListJob: (page: number,location: string, description: string, full_time: boolean) => {
    return useSWR(url.baseJob(page, location, description, full_time), http.fetcher);
  },
  useDetailJob: (id: any) => {
    return useSWR(url.basedIdJob(id), http.fetcher);
  },
};

const api = {
  
};

export const JobRepository = {
  url,
  hooks,
  api,
};
