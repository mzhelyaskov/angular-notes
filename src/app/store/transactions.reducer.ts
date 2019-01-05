import {TransactionsStateModel} from '../models/transactions-state.model';
import {TransactionActions, TransactionsActionTypes} from './transaction.actions';

const initialState: TransactionsStateModel = {
  year: 2018,
  entries: []
};

export function transactionsReducer(state: TransactionsStateModel = initialState, action: TransactionActions): TransactionsStateModel {
  switch (action.type) {
    case TransactionsActionTypes.FetchTransactionsSucceed: {
      return {...state, entries: action.transactions};
    }
    default:
      return state;
  }
}
