import {Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: 'form-field.html',
  host: {}
})
export class FormField {
  @Input() sm: string;
  @Input() md: string;
  @Input() lg: string;
  @Input() smOffset: string;
  @Input() mdOffset: string;
  @Input() lgOffset: string;

  constructor(private host: ElementRef) {
    console.log('host:', host);
  }
}
