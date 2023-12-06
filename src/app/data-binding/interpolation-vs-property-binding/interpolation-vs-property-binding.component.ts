import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-vs-property-binding',
  templateUrl: './interpolation-vs-property-binding.component.html',
  styleUrl: './interpolation-vs-property-binding.component.css'
})
export class InterpolationVSPropertyBindingComponent {
  name = "John"
  disable = false
  makeEnabled(){
    this.disable=!this.disable;
  }
  showReason(){
    alert("💡 Coz, the first one uses interpolation which only works with Numeric & String values, to enable them you needed boolean type & property binding which 2nd one had, see the code for more info.")
  }
}
