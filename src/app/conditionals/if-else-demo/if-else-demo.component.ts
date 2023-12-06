import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else-demo',
  templateUrl: './if-else-demo.component.html',
  styleUrls: ['./if-else-demo.component.css']
})
export class IfElseDemoComponent {
  temp: string = "If Block";
  stat: string = "else";

  toggleStatus() {
    if (this.temp === 'If Block' && this.stat==='else') {
      this.temp = 'else Block';
      this.stat = 'If'
    } else {
      this.temp = 'If Block';
      this.stat = 'else'
    }
  }
}
