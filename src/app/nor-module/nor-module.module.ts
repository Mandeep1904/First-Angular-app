import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NorCompComponent } from './nor-comp/nor-comp.component';

@NgModule({
  declarations: [NorCompComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NorCompComponent
  ]
})
export class NorModuleModule { }
