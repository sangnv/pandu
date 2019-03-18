
import { Component, ElementRef, Input, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ComponentControlBase } from '@framework/base';

@Component({
  selector: 'focus-control',
  templateUrl: './focus-control.component.html',
  styleUrls: ['./focus-control.component.scss'],
})
export class FocusControlComponent extends ComponentControlBase {
  
  @Input()
  formGroup: FormGroup;

  @Input()
  firstControl: ComponentControlBase;  

  constructor(private elementRef: ElementRef) {
    super();
  }

  protected onAfterContentChecked(): void {}

  protected onAfterContentInit(): void {}

  protected onAfterViewChecked(): void {}

  protected onAfterViewInit(): void {
    this.initFocusControl();
    this.focusFirstControl();
  }

  protected onChanges(changes: SimpleChanges): void {}

  protected onDestroy(): void {}

  protected onDoCheck(): void {}

  protected onInit(): void {}

  public focus(): void {
    
  }

  private initFocusControl() {
    
  }

  public focusFirstControl() {
    if (this.firstControl) {
      setTimeout(() => {
        this.firstControl.focus();
      });
    }
  }
}
