export interface IStorageBase {
  getItemValue(key: string): string | null;
  removeByKey(key: string): void;
  setItem(key: string, value: string): void;
  removeAll(): void;
}
