import axios from 'axios';
import Parameters from './api/parameters'
import Commands from './api/commands'

export default class SavRestApi {

  parameters: Parameters
  commands: Commands
  constructor(baseUrl: string){
    axios.defaults.baseURL = baseUrl

    this.parameters = new Parameters()
    this.commands = new Commands()
  }
}