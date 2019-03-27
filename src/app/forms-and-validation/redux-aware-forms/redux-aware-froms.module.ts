import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {ReduxAwareFromsComponent} from './redux-aware-froms.component';
import {formReducer} from './store/raf.reducer';

const routes: Routes = [
  {path: '', component: ReduxAwareFromsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    StoreModule.forFeature('form', formReducer),
    RouterModule.forChild(routes)
  ],
  declarations: [
    ReduxAwareFromsComponent
  ],
  exports: []
})
export class ReduxAwareFromsModule {}
