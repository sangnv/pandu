import { IPage } from './IPage';
import { SimpleChanges } from '@angular/core';


export abstract class Page implements IPage {
  protected abstract onInit(): void;

  protected abstract onDestroy(): void;

  protected abstract onChanges(changes: SimpleChanges): void;

  protected abstract onDoCheck(): void;

  protected abstract onAfterContentInit(): void;

  protected abstract onAfterContentChecked(): void;

  protected abstract onAfterViewInit(): void;

  protected abstract onAfterViewChecked(): void;

  constructor() {}

  ngOnInit(): void {
    this.onInit();
  }

  ngOnDestroy(): void {
    this.onDestroy();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onChanges(changes);
  }

  ngDoCheck(): void {
    this.onDoCheck();
  }

  ngAfterContentInit(): void {
    this.onAfterContentInit();
  }

  ngAfterContentChecked(): void {
    this.onAfterContentChecked();
  }

  ngAfterViewInit(): void {
    this.onAfterViewInit();
  }

  ngAfterViewChecked(): void {
    this.onAfterViewChecked();
  }
}
