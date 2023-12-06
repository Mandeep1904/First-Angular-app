import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncComponent } from './func/func.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [FuncComponent, CounterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FuncComponent,
    CounterComponent
  ]
})
export class EventsDemoModule { }
