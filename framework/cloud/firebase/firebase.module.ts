import { NgModule } from '@angular/core';
import * as firebase from 'firebase/app';
import { environment } from '@app/env/environment';
import { FirebaseMessageModule } from './message';
import { FirebaseAuthenticationModule } from './authentication';


firebase.initializeApp(environment.firebase);

@NgModule({
  imports: [
    
  ],
  exports :[
    FirebaseAuthenticationModule,
    FirebaseMessageModule
  ],
  providers: [],
})
export class FirebaseModule {}
