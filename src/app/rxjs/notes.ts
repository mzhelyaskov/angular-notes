import {interval} from 'rxjs';

function rxJsMergeMapAndSwitchMap() {
  const click$ = interval(4000);
  const interval$ = interval(1000);
  // === start
  // const observable$ = click$.pipe(map(event => interval$.subscribe(num => console.log(num))));

  // === mergeAll
  // const observable$ = click$.pipe(map(event => interval$));
  // observable$.pipe(mergeAll()).subscribe(num => console.log('num:', num));

  // === mergeMap
  // click$
  //   .pipe(mergeMap(event => interval$))
  //   .subscribe(num => console.log('num:', num));

  // function myMergeMap(innerObservable) {
  //   /** the click observable, in our case */
  //   const source = this;
  //   return new Observable(observer => {
  //     source.subscribe(outerValue => {
  //       /** innerObservable — the interval observable, in our case */
  //       innerObservable(outerValue).subscribe(innerValue => {
  //         observer.next(innerValue);
  //       });
  //
  //     });
  //   });
  // }
  // Observable.prototype.myMergeMap = myMergeMap;

  // const observable$ = click$.map(event => {
  //   return interval$;
  // });
  // observable$.switch().subscribe(num => console.log(num));
}
