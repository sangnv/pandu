import { CoreState } from '../states';
import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

export const coreReducer: ActionReducerMap<CoreState> = {
  router: routerReducer  
};

