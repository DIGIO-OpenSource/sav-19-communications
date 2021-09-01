import HttpCall from "../services/http-call";
import {URLS} from '../constants/endpoints'
import { SendCommandOptions } from "../types/api/commands/options";
import { formatRoute } from '../utils/url';


export default class Parameters{
  constructor(){}

  async sendCommand(options: SendCommandOptions): Promise<any>{
    const call =  new HttpCall();
    try{
      const result = await call.request({
        method: 'post',
        url:  formatRoute(URLS.COMMAND.SEND,[
          {
            name: ':commandId',
            value: options.commandId
          }
        ])
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }
}