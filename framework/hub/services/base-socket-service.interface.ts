import { Observable } from 'rxjs';

export interface IBaseSocketService {
  emit<T>(key: string, data?: T, fn?: Function);
  
  fromEvent<T>(key: string): Observable<T>;

  on(key: string, fn?: Function);

  removeAllListeners(key?: string);

  removeListener(key?: string, fn?: Function);

  connect();

  disconnect();
}