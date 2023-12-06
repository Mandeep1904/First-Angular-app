import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolationVSPropertyBindingComponent } from './interpolation-vs-property-binding/interpolation-vs-property-binding.component';

@NgModule({
  declarations: [InterpolationVSPropertyBindingComponent],
  imports: [
    CommonModule
  ],
  exports:[InterpolationVSPropertyBindingComponent]
})
export class DataBindingModule { }
