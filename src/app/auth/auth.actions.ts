import { Action } from '@ngrx/store';
import {User} from './model/user.model';

export enum AuthActionTypes {
  LoadAction = '[Auth] Load Auths',
  LoginAction = '[Auth] Login Action',
  LogoutAction = '[Auth] Logout Action',
  
  
}

export class Login implements Action {
  readonly type = AuthActionTypes.LoginAction;
  constructor(public payload: {user: User}){}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LogoutAction;
}


export type AuthActions = Login|Logout;
