import { Injectable } from '@angular/core';
import { FileHelper } from './file.helper';
import { FormHelper } from './form.helper';
import { GuidHelper } from './guid.helper';
import { JqueryHelper } from './jquery.helper';
import { LodashHelper } from './lodash.helper';
import { MomentHelper } from './moment.helper';
import { NumberHelper } from './number.helper';
import { StorageProvider } from './storage/providers';


@Injectable()
export class UtilityHelper {

	constructor(public File: FileHelper,
							public Form: FormHelper,
							public Guid: GuidHelper,
							public Jquery: JqueryHelper,
							public Lodash: LodashHelper,
							public Moment: MomentHelper,
							public Number: NumberHelper,
							public Storage: StorageProvider){

	}
}