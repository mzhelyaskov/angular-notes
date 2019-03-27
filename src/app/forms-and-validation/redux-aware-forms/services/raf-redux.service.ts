import {Injectable} from '@angular/core';
import {Action, select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {IFormState} from '../models/form-state.model';
import {IMainState} from '../models/main-state.model';

@Injectable({
  providedIn: 'root'
})
export class RafReduxService {

  constructor(private store: Store<IMainState>) {}

  formState$: Observable<IFormState> = this.store.pipe(select((s: IMainState) => s.form));

  dispatchActions(actions: Action[]) {
    actions.forEach(this.store.dispatch.bind(this.store));
  }
}
