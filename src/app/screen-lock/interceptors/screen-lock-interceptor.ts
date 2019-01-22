import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs/index';
import {catchError, tap} from 'rxjs/internal/operators';
import {ScreenLockReduxService} from '../services/screen-lock-redux.service';

@Injectable()
export class ScreenLockInterceptor implements HttpInterceptor {

  waitingRequests: HttpRequest<any>[] = [];
  readonly ignoredUrlReqExps = this.compilePatterns([
    '^/agent/api/documents/invoices/download$',
    '^/agent/api/documents/statements/download$',
    '^/agent/api/documents/corrections/download$',
    '^/agent/api/agents/suggest$',
    '^/agent/api/trainings/uploadInternal$'
  ]);

  constructor(private screenLockReduxService: ScreenLockReduxService) {}

  get onlyOneWaitingRequestExists(): boolean {
    return this.waitingRequests.length === 1;
  }

  get thereAreNoWaitingRequests(): boolean {
    return !this.waitingRequests.length;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.waitingRequests.push(req);
    this.lockScreen(req);
    return next.handle(req).pipe(
      tap(event => {
        if (event.type === HttpEventType.Response) {
          this.removeRequestFromWaitingRequestsList(req);
          this.unlockScreen(req);
        }
      }),
      catchError(error => {
        this.screenLockReduxService.unlockScreen();
        return throwError(error);
      })
    );
  }

  private removeRequestFromWaitingRequestsList(req: HttpRequest<any>) {
    const index = this.waitingRequests.indexOf(req);
    if (index > -1) {
      this.waitingRequests.splice(index, 1);
    }
  }

  private lockScreen(req: HttpRequest<any>): void {
    if (this.onlyOneWaitingRequestExists && !this.shouldBeIgnored(req)) {
      this.screenLockReduxService.lockScreen();
    }
  }

  private unlockScreen(req: HttpRequest<any>): void {
    if (this.thereAreNoWaitingRequests && !this.shouldBeIgnored(req)) {
      this.screenLockReduxService.unlockScreen();
    }
  }

  private shouldBeIgnored(req: HttpRequest<any>): boolean {
    return this.ignoredUrlReqExps.some(reqexp => reqexp.test(req.url));
  }

  private compilePatterns(patterns: string[]): RegExp[] {
    return patterns.map(pattern => new RegExp(pattern));
  }
}
