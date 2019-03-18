import { IComponentBase } from '../interfaces';
import { SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export abstract class ComponentBase implements IComponentBase {
  protected abstract onInit(): void;

  protected abstract onDestroy(): void;

  protected abstract onChanges(changes: SimpleChanges): void;

  protected abstract onDoCheck(): void;

  protected abstract onAfterContentInit(): void;

  protected abstract onAfterContentChecked(): void;

  protected abstract onAfterViewInit(): void;

  protected abstract onAfterViewChecked(): void;

  protected constructor() {}

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

  protected validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
