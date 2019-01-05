import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import {TransactionsDataService} from '../services/transactions-data.service';
import * as TransactionActions from './transaction.actions';
import {TransactionsActionTypes} from './transaction.actions';

@Injectable()
export class TransactionEffects {

  constructor(private actions$: Actions,
              private transactionsDataService: TransactionsDataService) {
  }

  @Effect()
  fetchTransactions$ = this.actions$.pipe(
    ofType<TransactionActions.FetchTransactions>(TransactionsActionTypes.FetchTransactions),
    switchMap(action => this.transactionsDataService.getTransactions$(action.year)),
    map(transactions => {
      console.log('effect transactions:', transactions);
      return new TransactionActions.FetchTransactionsSucceed(transactions);
    })
  );
}
