import { Injectable } from '@angular/core';
import { PythonSocket } from '../endpoints';
import { Observable } from 'rxjs';
import { IBaseSocketService } from './base-socket-service.interface';

@Injectable()
export class PythonSocketService implements IBaseSocketService {

  constructor(private pythonSocket: PythonSocket) {
    // For Dev            
    window['pythonSocket'] = this.pythonSocket;    
  }

  // -------------[Private Methods]-------------

  // -------------[Public Socket APIs]-------------
  public emit<T>(key: string, data?: T, fn?: Function) {
    //this.pythonSocket.emit(key, data, fn);
  }

  public fromEvent<T>(key: string): Observable<T> {
    //return this.pythonSocket.fromEvent<T>(key);
    return null;
  }

  public on(key: string, fn?: Function) {
    //return this.pythonSocket.on(key, fn);
  }

  public removeAllListeners(key?: string) {
    //return this.pythonSocket.removeAllListeners(key);
  }

  public removeListener(key?: string, fn?: Function) {
    //return this.pythonSocket.removeListener(key);
  }

  public connect() {
    //this.pythonSocket.connect();
  }

  public disconnect() {
    //this.pythonSocket.disconnect();
  }
}