import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-case-demo',
  templateUrl: './switch-case-demo.component.html',
  styleUrls: ['./switch-case-demo.component.css']
})
export class SwitchCaseDemoComponent {
  color: string = 'red';

  changeColor(col: string) {
    const lowerCaseCol = col.toLowerCase();

    if (lowerCaseCol === 'red' || lowerCaseCol === 'blue' || lowerCaseCol === 'green') {
      this.color = lowerCaseCol;
    } else {
      this.color = ''; // Set to an empty string for the default case
    }
  }
}
