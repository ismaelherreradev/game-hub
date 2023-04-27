import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next?: string | null;
  results: T[];
}

const axiosIntance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "065a1653038042558b1708e972428a26",
  },
});

class APICLient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async getAll(config: AxiosRequestConfig) {
    const res = await axiosIntance.get<FetchResponse<T>>(this.endpoint, config);
    return res.data;
  }

  async getGAme(id: string | number) {
    const res = await axiosIntance.get<T>(`${this.endpoint}/${id}`);
    return res.data;
  }
}

export default APICLient;
