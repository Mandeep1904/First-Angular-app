import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1-inline-style',
  standalone: true,
  imports: [],
  templateUrl: './comp1-inline-style.component.html',
  styles: `#mypara1{color:red}`
})
export class Comp1InlineStyleComponent {
}
