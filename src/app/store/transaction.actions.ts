import {Action} from '@ngrx/store';
import {TransactionModel} from '../models/transaction.model';

export enum TransactionsActionTypes {
  FetchTransactions = '[Transactions] FetchTransactions',
  FetchTransactionsSucceed = '[Transactions] FetchTransactionsSucceed',
}

export class FetchTransactions implements Action {
  readonly type = TransactionsActionTypes.FetchTransactions;

  constructor(public year: number) {}
}

export class FetchTransactionsSucceed implements Action {
  readonly type = TransactionsActionTypes.FetchTransactionsSucceed;

  constructor(public transactions: TransactionModel[]) {}
}

export type TransactionActions =
  | FetchTransactionsSucceed
  ;
