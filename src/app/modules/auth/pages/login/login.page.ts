import { Component, SimpleChanges } from '@angular/core';
import { PublicPage } from '@framework/base';

@Component({
  selector: 'login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends PublicPage {  

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
