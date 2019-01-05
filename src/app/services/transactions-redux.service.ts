import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {TransactionModel} from '../models/transaction.model';
import {TransactionsStateModel} from '../models/transactions-state.model';
import * as TransactionActions from '../store/transaction.actions';

@Injectable({
  providedIn: 'root'
})
export class TransactionsReduxService {

  constructor(private store: Store<{ transactions: TransactionsStateModel }>) {}

  fetchTransactions(year: number) {
    this.store.dispatch(new TransactionActions.FetchTransactions(year));
  }

  getTransactions$(): Observable<TransactionModel[]> {
    return this.store.select(s => s.transactions.entries);
  }

  getYear$(): Observable<number> {
    return this.store.select(s => s.transactions.year);
  }
}
