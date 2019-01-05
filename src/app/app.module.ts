import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EffectsModule} from '@ngrx/effects';
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {MemoizationComponent} from './components/memoizatoin/memoization.component';
import {TransactionsComponent} from './components/transactions/transactions.component';
import {AppStateModel} from './models/app-state.model';
import {TransactionEffects} from './store/transaction.effects';
import {transactionsReducer} from './store/transactions.reducer';

const state: ActionReducerMap<AppStateModel> = {
  transactions: transactionsReducer
};

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    HomeComponent,
    MemoizationComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(state),
    EffectsModule.forRoot([TransactionEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
