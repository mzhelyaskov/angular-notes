import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {screenLockReducer} from './store/screen-lock.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('screenLock', screenLockReducer)
  ]
})
export class AppScreenLockModule {}
