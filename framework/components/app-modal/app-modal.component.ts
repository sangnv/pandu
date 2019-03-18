import { Component, SimpleChanges, Input, ViewContainerRef, ViewChild, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { ComponentControlBase } from '@framework/base';
import { ModalInfo } from '@framework/models';
import { ModalService } from '@framework/services';

@Component({
  selector: 'app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.scss']
})
export class AppModalComponent extends ComponentControlBase {
   

  @Input()
  modalInfo: ModalInfo;
  @Input()
  index: number;

  @ViewChild('modaltemplate', { read: ViewContainerRef }) 
  entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver,
              private detector: ChangeDetectorRef,
              private modalService: ModalService) {
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
    this.init();
  }
  protected onAfterViewChecked(): void {
    
  }
  public focus(): void {
    
  } 

  private init() {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(this.modalInfo.type);
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance.data = this.modalInfo.data;
    componentRef.instance.onClose.subscribe((modalInfo: ModalInfo)=> {
      this.modalService.closeModal(this.modalInfo.id);
    });

    this.onModalShown();
    this.detector.detectChanges();
  }

  private onModalShown() {
    this.modalService.modalShown(this.modalInfo.id);
  }

  private onModalClosed() {
    this.modalService.closeModal(this.modalInfo.id);
  }

  public closeModal($event: any) {
    this.onModalClosed();
  }
}
