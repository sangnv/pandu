import { Injectable } from '@angular/core';

@Injectable()
export class GuidHelper {
  // Follow RFC4122
  private guidPattern: string = '^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$';
  private guidRegex = new RegExp(this.guidPattern);

  constructor() {}

  // Follow RFC4122
  private s4(): string {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  private new(): string {
    return 'ss-s-s-s-sss'.replace(/s/g, this.s4);
  }

  public guid(): string {
    return this.new();
  }

  public transactionId(name: string = ''): string {
    const id: string = '[TransactionId][' + name + '][' + this.new() + ']';
    console.log(id);
    return id;
  }

  public isGuid(guid: string): boolean {
    return this.guidRegex.test(guid);
  }
}
