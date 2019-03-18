import { Page } from '../page';
import { IPublicPage } from './IPublicPage';

export abstract class PublicPage extends Page implements IPublicPage {
  constructor() {
    super();
  }
}
