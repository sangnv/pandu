import { Injectable } from '@angular/core';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Injectable()
export class AuthenticationService { 

  constructor(private googlePlus: GooglePlus ) {

  }

  public loginWithFacebook() {
    console.log('loginWithFacebook', Facebook);

    Facebook.getLoginStatus().then((response: any) => {
    	if(response.status === 'connected') {
    		console.log('connected',response);
    	} else {
    		Facebook.login(["email", "public_profile", "user_friends"]).then((data)=>{
      console.log(data);
    },(error: any)=>{
    	console.log('Test',error);
    });
    	}
    });
  }

  public loginWithGoogle() {
    console.log('loginWithFacebook', Facebook);

    this.googlePlus.login({})
  .then(res => console.log(res))
  .catch(err => console.error(err));
  }
}