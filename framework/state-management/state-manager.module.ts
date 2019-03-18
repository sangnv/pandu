import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { coreReducer, metaReducers } from './reducers';
import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterUrlSerializer } from './states';
import { FrameworkModule } from '@framework/framework.module';

@NgModule({
  imports: [
    CommonModule,
    FrameworkModule,    
    StoreModule.forRoot(coreReducer, {metaReducers}),
    EffectsModule.forRoot([]),
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: RouterUrlSerializer }
  ]
})

export class StateManagerModule {}
