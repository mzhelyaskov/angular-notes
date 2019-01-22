import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {AppSharedModule} from '../../shared-module/app-shared.module';
import * as ScreenLockActions from '../store/screen-lock.action';

export function ScreenLocking(): MethodDecorator {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
      const store = AppSharedModule.injector.get(Store);
      store.dispatch(new ScreenLockActions.IncrementPendingRequestsCounter());
      const result = original.apply(this, args);
      if (result instanceof Observable) {
        return result.pipe(
          finalize(() => {
            store.dispatch(new ScreenLockActions.DecrementPendingRequestsCounter());
          })
        );
      }
      if (result instanceof Promise) {
        const promiseResponseDecorator = response => {
          store.dispatch(new ScreenLockActions.DecrementPendingRequestsCounter());
          return response;
        };
        return result
          .then(promiseResponseDecorator)
          .catch(promiseResponseDecorator);
      }
      return result;
    };
    return descriptor;
  };
}
