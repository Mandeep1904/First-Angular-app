import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter</h3>
    <p id="valPara">{{val}}</p>
    <button class="btn btn-primary" (click)="counterFunc('increase')">Increase</button>
    <button class="btn btn-primary mx-1" (click)="counterFunc('decrease')">Decrease</button>
  `,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  val = 0;

  counterFunc(action: string) {
    action === "increase" && this.val++
    action === "decrease" && this.val--
  }
}
