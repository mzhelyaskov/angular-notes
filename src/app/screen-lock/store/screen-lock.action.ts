import {Action} from '@ngrx/store';

export enum ScreenLockActionTypes {
  LOCK_SCREEN = '[ScreenLock] lock screen',
  UNLOCK_SCREEN = '[ScreenLock] unlock screen',
  IncrementPendingRequestsCounter = '[ScreenLock] Increment pending requests counter',
  DecrementPendingRequestsCounter = '[ScreenLock] Decrement pending requests counter',
}


export class LockScreen implements Action {
  readonly type = ScreenLockActionTypes.LOCK_SCREEN;
}

export class UnlockScreen implements Action {
  readonly type = ScreenLockActionTypes.UNLOCK_SCREEN;
}

export class IncrementPendingRequestsCounter implements Action {
  readonly type = ScreenLockActionTypes.IncrementPendingRequestsCounter;
}

export class DecrementPendingRequestsCounter implements Action {
  readonly type = ScreenLockActionTypes.DecrementPendingRequestsCounter;
}

export type ScreenLockActions =
  | LockScreen
  | UnlockScreen
  | IncrementPendingRequestsCounter
  | DecrementPendingRequestsCounter
  ;
