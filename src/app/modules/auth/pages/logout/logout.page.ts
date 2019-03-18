import { Component, OnInit, SimpleChanges } from '@angular/core';
import { PublicPage } from '@framework/base';

@Component({
  selector: 'logout-page',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage extends PublicPage {  

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