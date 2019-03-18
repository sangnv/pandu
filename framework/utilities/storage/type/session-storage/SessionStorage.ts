import { StorageBase } from '../../base';
import { ISessionStorage } from './ISessionStorage';

export class SessionStorage extends StorageBase implements ISessionStorage {
  constructor() {
    super();
  }

  getItemValue(key: string): string | null {
    return localStorage.getItem(key);
  }

  removeByKey(key: string): void {
    localStorage.removeItem(key);
  }
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
  removeAll(): void {
    localStorage.clear();
  }
}
