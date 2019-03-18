import { Injectable, EventEmitter } from '@angular/core';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthenticationProvider {
  
  private app: firebase.app.App;
  public auth: firebase.auth.Auth;

  //public supportMessaginSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isSupported);

  constructor() {
    this.app = firebase.app();
    this.auth = this.app.auth();
  }

  public login() {

  }

  public facebookLogin() {
    
  }
}