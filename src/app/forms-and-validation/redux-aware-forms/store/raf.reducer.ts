import {Action} from '@ngrx/store';
import {IFormState} from '../models/form-state.model';
import {FORM_NAME_CHANGED, FORM_SET_VALIDITY, IFormNameChangedAction, IFormSetValidityAction} from './raf.actions';

const initialState: IFormState = {
  name: 'hello',
  isValid: false,
  isDirty: false
};

export function formReducer(state: IFormState = initialState, action: Action): IFormState {
  switch (action.type) {
    case FORM_NAME_CHANGED: {
      const typedAction = <IFormNameChangedAction>action;
      return {...state, name: typedAction.value, isDirty: true};
    }
    case FORM_SET_VALIDITY: {
      const typedAction = <IFormSetValidityAction>action;
      return {...state, isValid: typedAction.isValid};
    }
    default: {
      return state;
    }
  }
}
