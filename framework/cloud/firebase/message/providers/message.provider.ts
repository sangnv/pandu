import { Injectable, EventEmitter } from '@angular/core';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MessageProvider {
  private isSupported: boolean = firebase.messaging.isSupported();
  private app: firebase.app.App;
  public messaging: firebase.messaging.Messaging;

  public supportMessaginSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isSupported);

  constructor() {
    if (this.isSupported) {
      this.app = firebase.app();
      this.messaging = this.app.messaging();
      navigator.serviceWorker.register('firebase-messaging-sw.js')
        .then((registration) => {
          //console.log(registration);
          this.messaging.useServiceWorker(registration);
        },(error) => {
          //console.log(error);
        });
      
    }
  }
}