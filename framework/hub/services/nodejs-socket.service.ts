import { Injectable } from '@angular/core';
import { NodeJsSocket } from '../endpoints';
import { Observable } from 'rxjs';
import { IBaseSocketService } from './base-socket-service.interface';

@Injectable()
export class NodeJsSocketService implements IBaseSocketService {

  constructor(private nodeJsSocket: NodeJsSocket) {
    // For Dev            
    window['nodeJsSocket'] = this.nodeJsSocket;    
  }

  // -------------[Private Methods]-------------

  // -------------[Public Socket APIs]-------------  

  public emit<T>(key: string, data?: T, fn?: Function) {
    //this.nodeJsSocket.emit(key, data, fn);
  }

  public fromEvent<T>(key: string): Observable<T> {
    //return this.nodeJsSocket.fromEvent<T>(key);
    return null;
  }

  public on(key: string, fn?: Function) {
    //return this.nodeJsSocket.on(key, fn);
  }

  public removeAllListeners(key?: string) {
    //return this.nodeJsSocket.removeAllListeners(key);
  }

  public removeListener(key?: string, fn?: Function) {
    //return this.nodeJsSocket.removeListener(key);
  }

  public connect() {
    //this.nodeJsSocket.connect();
  }

  public disconnect() {
    //this.nodeJsSocket.disconnect();
  }
}