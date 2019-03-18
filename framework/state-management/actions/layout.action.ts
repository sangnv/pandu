import { Action } from '@ngrx/store';

export enum LayoutActions {
  DO_NOTHING = '[LAYOUT] Do Nothing'
}

export class DoNothing implements Action {
  readonly type: string = LayoutActions.DO_NOTHING
  constructor(){}
}


export type Actions = DoNothing;