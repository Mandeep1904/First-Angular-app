import { Component } from '@angular/core';

@Component({
  selector: 'app-comp3-both-inline',
  standalone: true,
  imports: [],
  template: `
    <p id="mypara3">
    3. Inline Style & template Component, where there're no extra files for these two.
    </p>
  `,
  styles: `#mypara3{color:green}`
})
export class Comp3BothInlineComponent {

}
