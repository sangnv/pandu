import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class MomentHelper {
	public moment: any;
	constructor(){
		this.moment = moment;
	}
}