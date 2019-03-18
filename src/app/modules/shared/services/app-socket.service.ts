import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { GravatateSocketService } from '@framework/hub';
import { concatMap, map } from 'rxjs/operators';
import { CoreState } from '@framework/state-management/states';

@Injectable()
export class AppSocketService {
  private channel: any = {
    conversation: 'conversation'
  }
  // public testSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private gravatateSocketService: GravatateSocketService,
              private store$: Store<CoreState>) {
  }

  // -------------[Private Methods]-------------
  // -------------[Public Methods]-------------
  public init() {    
    console.log('AppSocketService');
    // this.gravatateSocketService.on(this.channel.conversation, (data: any) => {
    //   console.log('AppSocketService', this.channel.conversation, data);
    // });
    // this.gravatateSocketService.fromEvent<any>(this.channel.conversation).pipe(map(data => {this.testSubject.next(data)}));    
  }
}