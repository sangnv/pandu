import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class LodashHelper {
	public lodash: any;
	constructor(){
		this.lodash = _;
	}
}