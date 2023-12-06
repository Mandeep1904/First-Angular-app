import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TypesOfComponentsComponent } from './types-of-components/types-of-components.component';
import { NorModuleModule } from './nor-module/nor-module.module';
import { EventsDemoModule } from './events-demo/events-demo.module';
import { CssDemoModule } from './css-demo/css-demo.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { ConditionalsModule } from './conditionals/conditionals.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TypesOfComponentsComponent, NorModuleModule, EventsDemoModule, CssDemoModule, DataBindingModule, ConditionalsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-ang-app';
}
