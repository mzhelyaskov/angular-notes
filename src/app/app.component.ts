import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AddressModel} from './models/address.model';
import {TransactionModel} from './models/transaction.model';
import {TransactionsReduxService} from './services/transactions-redux.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements
  OnInit, OnDestroy, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck {

  year = 2018;
  refs = [];
  observableRefs = [];
  transactions$: Observable<TransactionModel[]>;
  address: AddressModel;

  constructor(private transactionsReduxService: TransactionsReduxService) {}

  // get transactions$(): Observable<TransactionModel[]> {
  //   const observable = this.transactionsReduxService.getTransactions$().pipe(
  //     tap(transactions => {
  //       this.refs.push(transactions);
  //       console.log('app component transactions:', transactions);
  //     })
  //   );
  //   this.observableRefs.push(observable);
  //   return observable;
  // }

  fetchTransactions() {
    this.transactionsReduxService.fetchTransactions(this.year);
  }

  trackById(index, transaction: TransactionModel) {
    return transaction.id;
  }

  checkReferences() {
    console.log(this.refs);
    console.log(new Set(this.refs));
    console.log(this.observableRefs);
    console.log(new Set(this.observableRefs));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('| AppComponent: ngOnChanges');
  }

  ngOnInit() {
    this.address = {
      postcode: '01-111',
      number: '5',
      street: 'Woloska'
    };
    this.transactions$ = this.transactionsReduxService.getTransactions$().pipe(
      tap(transactions => {
        this.refs.push(transactions);
        console.log('new transactions:', transactions);
      })
    );
    console.log('| AppComponent: ngOnInit');
  }

  changePostcode() {
    this.address.postcode = '02-675';
  }

  ngDoCheck() {
    console.log('| AppComponent: ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('| AppComponent: ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('| AppComponent: ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('| AppComponent: ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('| AppComponent: ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('| AppComponent: ngOnDestroy');
  }
}
