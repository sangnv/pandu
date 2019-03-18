import { Component, SimpleChanges } from '@angular/core';
import { PublicPage } from '@framework/base';

@Component({
  selector: 'forgot-password-page',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage extends PublicPage {  

  constructor() {
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

}