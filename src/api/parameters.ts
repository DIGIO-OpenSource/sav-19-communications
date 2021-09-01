import HttpCall from "../services/http-call";
import {URLS} from '../constants/endpoints'
import { GetParamsOptions, SetParamsOptions } from "../types/api/parameters/options";

export default class Parameters{
  constructor(){}

  async getParams(options: GetParamsOptions): Promise<any>{
    const call =  new HttpCall();
    try{
      const result = await call.request({
        method: 'post',
        url: URLS.PARAMS.GET,
        data: options
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }
  async setParams(options: SetParamsOptions): Promise<any>{
    const call =  new HttpCall();
    try{
      const result = await call.request({
        method: 'post',
        url: URLS.PARAMS.SET,
        data: options
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

}