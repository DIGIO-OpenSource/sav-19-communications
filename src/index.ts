import axios from 'axios';
import Parameters from './api/parameters'

export default class SavRestApi {

  parameters: Parameters
  constructor(baseUrl: string){
    axios.defaults.baseURL = baseUrl

    this.parameters = new Parameters()
  }
}