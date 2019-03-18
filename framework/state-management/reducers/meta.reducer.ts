import { MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '@app/env/environment';
import { CoreState } from '../states';

export const metaReducers: MetaReducer<CoreState>[] =
  !environment.production ? [storeFreeze] : [];