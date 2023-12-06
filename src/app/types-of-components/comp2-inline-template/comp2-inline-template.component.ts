import { Component } from '@angular/core';

@Component({
  selector: 'app-comp2-inline-template',
  standalone: true,
  imports: [],
  template: `
    <p id="mypara2">
    2. Inline Template(HTML) Component, where there's no External HTML file
    </p>
  `,
  styleUrl: './comp2-inline-template.component.css'
})
export class Comp2InlineTemplateComponent {

}
