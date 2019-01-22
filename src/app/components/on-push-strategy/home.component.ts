import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {AddressModel} from '../../models/address.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements
  OnInit, OnDestroy, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck {

  @Input() address: AddressModel;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('HomeComponent: ngOnChanges');
  }

  ngOnInit() {
    console.log('HomeComponent: ngOnInit');
  }

  ngDoCheck() {
    console.log('HomeComponent: ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('HomeComponent: ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('HomeComponent: ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('HomeComponent: ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('HomeComponent: ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent: ngOnDestroy');
  }
}
