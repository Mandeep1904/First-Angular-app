import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfElseDemoComponent } from './if-else-demo/if-else-demo.component';
import { SwitchCaseDemoComponent } from './switch-case-demo/switch-case-demo.component';

@NgModule({
  declarations: [IfElseDemoComponent,SwitchCaseDemoComponent],
  imports: [
    CommonModule
  ],
  exports:[
    IfElseDemoComponent,SwitchCaseDemoComponent
  ]
})
export class ConditionalsModule { }
