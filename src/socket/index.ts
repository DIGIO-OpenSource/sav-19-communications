import { io } from "socket.io-client";

export default class Socket {

  private socket: any
  constructor(){
  }

  connect(url: string){
    this.socket = io(url, {
      reconnectionDelayMax: 10000,
    })
  }
  onVentilatorValueUpdate(action: Function){
    this.socket.on('ventilatorValueUpdate', action);
  }
}