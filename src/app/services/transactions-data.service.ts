import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, first} from 'rxjs/operators';
import {transactionsFor2017, transactionsFor2018} from '../mocks/transactions.mock';
import {TransactionModel} from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionsDataService {

  getTransactions$(year: number): Observable<TransactionModel[]> {
    let data = [];
    if (year === 2017) {
      data = transactionsFor2017.map(i => ({...i}));
    }
    if (year === 2018) {
      data = transactionsFor2018.map(i => ({...i}));
    }
    return of(data).pipe(delay(2000), first());
  }
}
