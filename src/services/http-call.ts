import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export default class HttpCall {

  constructor(){}

  async request(options: AxiosRequestConfig): Promise<AxiosResponse> {
    try {
      return await axios(options)
    } catch (error) {
      this.processError(error)
    }
  }

  processError (error: AxiosError): string | AxiosError {
    if (axios.isAxiosError(error)) {
      throw new Error(JSON.stringify(error.response.data));
    } else {
      throw new Error('General Error');
    }
  }

}