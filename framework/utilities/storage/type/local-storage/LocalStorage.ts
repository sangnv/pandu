import { StorageBase } from '../../base';
import { ILocalStorage } from './ILocalStorage';

export class LocalStorage extends StorageBase implements ILocalStorage {
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
