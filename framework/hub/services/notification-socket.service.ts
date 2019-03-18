import { Injectable } from '@angular/core';
import { NotificationSocket } from '../endpoints';
import { Observable } from 'rxjs';
import { IBaseSocketService } from './base-socket-service.interface';

@Injectable()
export class NotificationSocketService implements IBaseSocketService {

  constructor(private notificationSocket: NotificationSocket) {
    // For Dev            
    window['notificationSocket'] = this.notificationSocket;    
  }

  // -------------[Private Methods]-------------

  // -------------[Public Socket APIs]-------------  

  public emit<T>(key: string, data?: T, fn?: Function) {
    //this.notificationSocket.emit(key, data, fn);
  }

  public fromEvent<T>(key: string): Observable<T> {
    //return this.notificationSocket.fromEvent<T>(key);
    return null;
  }

  public on(key: string, fn?: Function) {
    //return this.notificationSocket.on(key, fn);
  }

  public removeAllListeners(key?: string) {
    //return this.notificationSocket.removeAllListeners(key);
  }

  public removeListener(key?: string, fn?: Function) {
    //return this.notificationSocket.removeListener(key);
  }

  public connect() {
    //this.notificationSocket.connect();
  }

  public disconnect() {
    //this.notificationSocket.disconnect();
  }
}