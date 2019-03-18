import { Component, SimpleChanges } from '@angular/core';
import { PublicPage } from '@framework/base';

@Component({
  selector: 'register-page',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage extends PublicPage {  

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