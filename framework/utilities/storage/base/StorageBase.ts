import { IStorageBase } from './IStorageBase';

export abstract class StorageBase implements IStorageBase {
  public abstract getItemValue(key: string): string | null;
  public abstract removeByKey(key: string): void;
  public abstract setItem(key: string, value: string): void;
  public abstract removeAll(): void;
  constructor() {}
}
