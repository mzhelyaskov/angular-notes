import {CommonModule} from '@angular/common';
import {Injector, NgModule} from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
  ]
})
export class AppSharedModule {

  static injector: Injector;

  constructor(private injector: Injector) {
    AppSharedModule.injector = injector;
  }
}
