import axios from 'axios';
import Parameters from './parameters'
import Commands from './commands'

export default class Api {

  parameters: Parameters
  commands: Commands
  constructor(baseUrl: string){
    axios.defaults.baseURL = baseUrl

    this.parameters = new Parameters()
    this.commands = new Commands()
  }
}