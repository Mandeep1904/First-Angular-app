import { Component } from '@angular/core';
import { Comp1InlineStyleComponent } from './comp1-inline-style/comp1-inline-style.component';
import { Comp2InlineTemplateComponent } from './comp2-inline-template/comp2-inline-template.component';
import { Comp3BothInlineComponent } from './comp3-both-inline/comp3-both-inline.component';
import { Comp4NoneInlineComponent } from './comp4-none-inline/comp4-none-inline.component';

@Component({
  selector: 'app-types-of-components',
  standalone: true,
  imports: [Comp1InlineStyleComponent, Comp2InlineTemplateComponent, Comp3BothInlineComponent, Comp4NoneInlineComponent],
  templateUrl: './types-of-components.component.html',
  styleUrl: './types-of-components.component.css'
})

export class TypesOfComponentsComponent {

}
