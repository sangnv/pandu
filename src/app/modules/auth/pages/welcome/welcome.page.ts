import { Component,  SimpleChanges } from '@angular/core';
import { PublicPage } from '@framework/base';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage extends PublicPage {  

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
