import { Injectable } from '@angular/core';
import { NodeJsSocketService } from './nodejs-socket.service';
import { PythonSocketService } from './python-socket.service';
import { NotificationSocketService } from './notification-socket.service';

@Injectable()
export class GravatateSocketService {

  constructor(private nodeJsSocketService: NodeJsSocketService,
              private pythonSocketService: PythonSocketService,
              private notificationSocketService: NotificationSocketService) {    
  }
  
  // -------------[Private Methods]-------------
  

  // -------------[Public Socket APIs]-------------
  public NodeJsSocketService: NodeJsSocketService = this.nodeJsSocketService;
  public PythonSocketService: PythonSocketService = this.pythonSocketService;
  public NotificationSocketService: NotificationSocketService = this.notificationSocketService;  
}