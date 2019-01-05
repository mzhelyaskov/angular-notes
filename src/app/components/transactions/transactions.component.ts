import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {TransactionModel} from '../../models/transaction.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transactions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsComponent implements
  OnInit, OnDestroy, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck {

  @Input() transaction: TransactionModel;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('    | TransactionsComponent: ngOnChanges');
  }

  ngOnInit() {
    console.log('    | TransactionsComponent: ngOnInit');
  }

  ngDoCheck() {
    console.log('    | TransactionsComponent: ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('    | TransactionsComponent: ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('    | TransactionsComponent: ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('    | TransactionsComponent: ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('    | TransactionsComponent: ngAfterViewChecked');
    console.log('    -------------------------------------------');
  }

  ngOnDestroy(): void {
    console.log('    | TransactionsComponent: ngOnDestroy');
  }
}
