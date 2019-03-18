import { Component, SimpleChanges } from '@angular/core';
import { ComponentBase } from '@framework/base';
import { AuthenticationService } from '@framework/services';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends ComponentBase {
  constructor(private authenticationService: AuthenticationService){
    super();
  }
  protected onInit(): void {
    
  }  
  protected onDestroy(): void {
    
  }
  protected onChanges(changes: SimpleChanges): void {
  }
  protected onDoCheck(): void {
  }
  protected onAfterContentInit(): void {
  }
  protected onAfterContentChecked(): void {
  }
  protected onAfterViewInit(): void {
  }
  protected onAfterViewChecked(): void {
  }

  public loginWithFacebook($event: any) {
    this.authenticationService.loginWithFacebook();
  }
  public loginWithGoogle($event: any) {
    this.authenticationService.loginWithGoogle();
  }
}
