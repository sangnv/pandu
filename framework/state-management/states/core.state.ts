import { RouterUrl } from './router-url.state';
import { RouterReducerState } from '@ngrx/router-store';

export interface CoreState {
  router: RouterReducerState<RouterUrl>  
};