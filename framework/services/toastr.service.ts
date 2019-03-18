import { Injectable } from '@angular/core';
// import { ToastrService, IndividualConfig, ActiveToast } from 'ngx-toastr';

@Injectable()
export class ToastService {
  private lastToast: any = {};
  private config = {
    /**
     * disable both timeOut and extendedTimeOut
     * default: false
     */
    disableTimeOut: false,
    /**
     * toast time to live in milliseconds
     * default: 5000
     */
    timeOut: 5000,
    /**
     * toast show close button
     * default: false
     */
    closeButton: false,
    /**
     * time to close after a user hovers over toast
     * default: 1000
     */
    extendedTimeOut: 1000,
    /**
     * show toast progress bar
     * default: false
     */
    progressBar: false,
    /**
     * changes toast progress bar animation
     * default: decreasing
     */
    progressAnimation: 'decreasing',
    /**
     * render html in toast message (possibly unsafe)
     * default: false
     */
    enableHtml: false,
    /**
     * css class on toast component
     * default: toast
     */
    toastClass: 'toast',
    /**
     * css class on toast container
     * default: toast-top-right
     */
    positionClass: 'toast-top-full-width',
    /**
     * css class on toast title
     * default: toast-title
     */
    titleClass: 'toast-title',
    /**
     * css class on toast message
     * default: toast-message
     */
    messageClass: 'toast-message',
    /**
     * animation easing on toast
     * default: ease-in
     */
    easing: 'ease-in',
    /**
     * animation ease time on toast
     * default: 300
     */
    easeTime: 300,
    /**
     * clicking on toast dismisses it
     * default: true
     */
    tapToDismiss: true,
    /**
     * Helps show toast from a websocket or from event outside Angular
     * default: false
     */
    onActivateTick: false
  }
  constructor() {

  }

  public show(message: string, title: string = '', options: any = {}) {
    // const toast: ActiveToast<any> = this.toastr.show(message, title, Object.assign(this.config, options));
    // if (toast) {
    //   this.lastToast['show'] = toast.toastId;
    //   toast.onShown.subscribe(this.onShown);
    // }
    // return this.lastToast['show'];
  }

  public success(message: string, title: string = '', options?: any) {
    // const toast: ActiveToast<any> = this.toastr.success(message, title, Object.assign(this.config, options));
    // if (toast) {
    //   this.lastToast['success'] = toast.toastId;
    //   toast.onShown.subscribe(this.onShown);
    // }
    // return this.lastToast['success'];
  }

  public error(message: string, title: string = '', options?: any) {
    // const toast: ActiveToast<any> = this.toastr.error(message, title, Object.assign(this.config, options));
    // if (toast) {
    //   this.lastToast['error'] = toast.toastId;
    //   toast.onShown.subscribe(this.onShown);
    // }
    // return this.lastToast['error'];
  }

  public info(message: string, title: string = '', options?: any) {
    // const toast: ActiveToast<any> = this.toastr.info(message, title, Object.assign(this.config, options));
    // if (toast) {
    //   this.lastToast['info'] = toast.toastId;
    //   toast.onShown.subscribe(this.onShown);
    // }
    // return this.lastToast['info'];
  }

  public warning(message: string, title: string = '', options?: any) {
    // const toast: ActiveToast<any> = this.toastr.warning(message, title, Object.assign(this.config, options));
    // if (toast) {
    //   this.lastToast['warning'] = toast.toastId;
    //   toast.onShown.subscribe(this.onShown);
    // }
    // return this.lastToast['warning'];
  }

  public clearAll() {
    // this.toastr.clear();
  }

  public clear(messageId: number) {
    // this.toastr.clear(messageId);
  }

  private onShown() {
    // console.log(this);
  }
}