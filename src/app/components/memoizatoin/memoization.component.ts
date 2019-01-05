import {Component} from '@angular/core';
import {memoize} from './memoizee.decorator';

@Component({
  selector: 'app-memoization',
  templateUrl: './memoization.component.html',
})
export class MemoizationComponent {
  framework = 'Angular';
  count = 0;

  // getTitle(framework: string): string {
  //   console.log('getTitle is called');
  //   return `I love ${framework.toUpperCase()}`;
  // }

  // getTitle = memoizee(function (framework: string) {
  //   console.log('getTitle is called');
  //   return `I love ${framework.toUpperCase()}`;
  // });

  @memoize()
  getTitle(framework: string) {
    console.log('getTitle is called');
    return `I love ${framework.toUpperCase()}`;
  }

  changeFramework() {
    if (this.framework === 'Angular') {
      this.framework = 'React';
    } else {
      this.framework = 'Angular';
    }
  }

  counterAdd() {
    this.count += 1;
  }
}
