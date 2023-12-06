import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentCssComponent } from './component-css/component-css.component';
import { GlobalCssComponent } from './global-css/global-css.component';
import { InternalCssComponent } from './internal-css/internal-css.component';

@NgModule({
  declarations: [GlobalCssComponent, ComponentCssComponent, InternalCssComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    ComponentCssComponent, GlobalCssComponent, InternalCssComponent
  ]
})

export class CssDemoModule { }
