import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ScreenStateModel} from '../models/screen-state.model';
import * as ScreenLockActions from '../store/screen-lock.action';
import * as ScreenLockSelectors from '../store/screen-lock.selectors';

@Injectable({
  providedIn: 'root'
})
export class ScreenLockReduxService {

  constructor(private store: Store<ScreenStateModel>) {}

  hasPendingRequests$ = this.store.pipe(select(ScreenLockSelectors.hasPendingRequests));
  isScreenLocked$ = this.store.pipe(select(ScreenLockSelectors.isScreenLocked));

  lockScreen(): void {
    this.store.dispatch(new ScreenLockActions.LockScreen());
  }

  unlockScreen(): void {
    this.store.dispatch(new ScreenLockActions.UnlockScreen());
  }

  incrementPendingRequestsCounter() {
    this.store.dispatch(new ScreenLockActions.IncrementPendingRequestsCounter());
  }

  decrementPendingRequestsCounter() {
    this.store.dispatch(new ScreenLockActions.DecrementPendingRequestsCounter());
  }
}
