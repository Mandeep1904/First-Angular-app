import { Component } from '@angular/core';

@Component({
  selector: 'app-component-css',
  template: `
    <h3>Types of Styles</h3>
    <p id="para1">1. Component CSS</p>
  `,
  styles: `
h3{
  margin-top:20px;
}

  #para1{
    color : red;
  }`,
})
export class ComponentCssComponent {}
