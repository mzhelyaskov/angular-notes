import {Action} from '@ngrx/store';

const initialState = {};

export function customFormReducer(state: any = initialState, action: Action): any {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
