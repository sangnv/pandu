import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable()
export class JqueryHelper {
	public jquery: any;
	constructor(){
		this.jquery = $;
	}
}