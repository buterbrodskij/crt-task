import axios, { AxiosResponse } from "axios";

export class GetLolerem {
  send(count: number): Promise<AxiosResponse<string>> {
    return axios.get(`${process.env.VUE_APP_API}${count}/short/headers`)
  }
}