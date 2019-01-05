import {TransactionModel} from './transaction.model';

export interface TransactionsStateModel {
  year: number;
  entries: TransactionModel[];
}
