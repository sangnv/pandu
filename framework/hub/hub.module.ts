import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NodeJsSocket, PythonSocket, NotificationSocket } from './endpoints';
import { GravatateSocketService, NodeJsSocketService, PythonSocketService, NotificationSocketService } from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  providers: [
    NodeJsSocket,
    PythonSocket,
    NotificationSocket,

    NodeJsSocketService,
    PythonSocketService,
    NotificationSocketService,
    GravatateSocketService
  ]
})
export class HubModule { }
