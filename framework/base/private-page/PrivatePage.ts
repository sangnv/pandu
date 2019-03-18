import { IPrivatePage } from './IPrivatePage';
import { Page } from '../page';

export abstract class PrivatePage extends Page implements IPrivatePage {
  constructor() {
    super();
  }
}
