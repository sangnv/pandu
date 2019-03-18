import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClientHttpInterceptor, JwtClientHttpInterceptor, ErrorClientHttpInterceptor } from './interceptors/';
import {
	FileHelper,
	FormHelper,
	GuidHelper,
	JqueryHelper,
	LodashHelper,
	MomentHelper,
	NumberHelper,
	UtilityHelper,
	ImageHelper
} from './utilities';
import { StorageProvider } from './utilities/storage/providers';
import { ToastService, ModalService, AuthenticationService } from './services';

import * as comps from './components';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HubModule } from './hub';

import { AngularMaterialModule } from './libs';
import { FirebaseModule } from './cloud/firebase';



@NgModule({
	declarations: [		
		comps.AppModalComponent,
		comps.AppModalContainerComponent,
		comps.FocusControlComponent
	],
	imports: [
		CommonModule, 
		// BrowserAnimationsModule
		// HttpClientModule,
		// FormsModule,
		// ReactiveFormsModule		
		FirebaseModule,
	],
	exports: [
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,

		// HubModule,
		AngularMaterialModule,
		

		comps.AppModalComponent,
		comps.AppModalContainerComponent,
		comps.FocusControlComponent,

	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: ClientHttpInterceptor, multi: true },
		//{ provide: HTTP_INTERCEPTORS, useClass: JwtClientHttpInterceptor, multi: true },
		//{ provide: HTTP_INTERCEPTORS, useClass: ErrorClientHttpInterceptor, multi: true },
		ToastService,
		ModalService,
		AuthenticationService,
		ImageHelper,
		StorageProvider,
		FileHelper,
		FormHelper,
		GuidHelper,
		JqueryHelper,
		LodashHelper,
		MomentHelper,
		NumberHelper,
		UtilityHelper,

	]
})

export class FrameworkModule {

}