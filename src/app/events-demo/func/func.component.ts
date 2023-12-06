import { Component } from '@angular/core';

@Component({
  selector: 'app-func',
  templateUrl: './func.component.html',
  styleUrl: './func.component.css'
})
export class FuncComponent {

  alertBox() {
    alert("Hey yo! How's it going ?")
  }

  // accepts two parameters 
  sayMyName(fname: string, lname: string) {
    alert(fname + ' ' + lname)
  }

  displayVal = " " //Property to be assigned val on an event.
  showText(val: string) {
    this.displayVal = val;
  }

  overEvent() {
    console.warn("Hovered over")
  }
}
