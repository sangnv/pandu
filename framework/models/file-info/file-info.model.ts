import { ModelBase } from '@framework/base/models';

export class FileInfo extends ModelBase {
  public fileName: string; 
  public size: number; 
  public type: string; 
  public data: Promise<any>
  constructor(init?: Partial<FileInfo>) {
    super();
    Object.assign(this, init);
  }
}
