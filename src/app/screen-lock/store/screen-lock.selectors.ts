import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ScreenStateModel} from '../models/screen-state.model';

export const getState = createFeatureSelector<ScreenStateModel>('screenLock');
export const hasPendingRequests = createSelector(getState, s => s.pendingRequestsCounter > 0);
export const isScreenLocked = createSelector(getState, s => s.locked);
