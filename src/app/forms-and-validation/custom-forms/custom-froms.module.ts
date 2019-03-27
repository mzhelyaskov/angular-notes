import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {FormField} from './componets/form-field';
import {CustomFormsComponent} from './custom-forms.component';
import {customFormReducer} from './store/custom-forms.reducer';

const routes: Routes = [
  {path: '', component: CustomFormsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('customForms', customFormReducer),
    RouterModule.forChild(routes)
  ],
  declarations: [FormField, CustomFormsComponent],
  exports: []
})
export class CustomFromsModule {}
