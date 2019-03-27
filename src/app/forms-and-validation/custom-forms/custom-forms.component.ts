import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-custom-forms',
  templateUrl: './custom-forms.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomFormsComponent implements OnInit {

  myForm: FormGroup = new FormGroup({
    name: new FormControl('', {
      updateOn: 'blur',
      validators: [
        Validators.required,
        Validators.maxLength(10)
      ]
    })
  });

  ngOnInit(): void {

  }
}
