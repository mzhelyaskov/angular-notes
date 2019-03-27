import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {RafReduxService} from './services/raf-redux.service';
import {formNameChanged, formSetValidity} from './store/raf.actions';

@Component({
  selector: 'app-redux-aware-forms',
  templateUrl: './redux-aware-froms.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReduxAwareFromsComponent implements OnInit {

  myForm: FormGroup = new FormGroup({
    name: new FormControl('', {
      updateOn: 'blur',
      validators: [
        Validators.required,
        Validators.maxLength(10)
      ]
    })
  });

  constructor(private rafReduxService: RafReduxService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.rafReduxService.formState$.subscribe(fs => {
      this.myForm.controls['name'].setValue(fs.name);
      this.cdr.detectChanges();
    });
    this.myForm.controls['name'].valueChanges.pipe(distinctUntilChanged()).subscribe(value => {
      this.rafReduxService.dispatchActions([formNameChanged(value)]);
    });
    this.myForm.statusChanges.pipe(distinctUntilChanged(), map(status => status === 'VALID')).subscribe(isValid => {
      this.rafReduxService.dispatchActions([formSetValidity(isValid)]);
    });
  }
}
