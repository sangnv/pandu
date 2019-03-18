import { IStorageBase } from '../base';
import { IStorageProvider } from './IStorageProvider';
import { Injectable } from '@angular/core';

@Injectable()
export class StorageProvider implements IStorageProvider {
  public toInstance<T extends IStorageBase>(type: { new (): T }): IStorageBase {
    const _provider: T = new type();

    // Public API Function
    return _provider;
  }
}
