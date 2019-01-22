import {ScreenStateModel} from '../models/screen-state.model';
import {ScreenLockActions, ScreenLockActionTypes} from './screen-lock.action';

export const ScreenLockInitialState: ScreenStateModel = {
  pendingRequestsCounter: 0
};

export function screenLockReducer(state = ScreenLockInitialState, action: ScreenLockActions): ScreenStateModel {
  switch (action.type) {
    case ScreenLockActionTypes.IncrementPendingRequestsCounter: {
      const pendingRequestsCounter = state.pendingRequestsCounter + 1;
      return {...state, pendingRequestsCounter};
    }
    case ScreenLockActionTypes.DecrementPendingRequestsCounter: {
      const pendingRequestsCounter = state.pendingRequestsCounter - 1;
      return {...state, pendingRequestsCounter};
    }
    default:
      return state;
  }
}
