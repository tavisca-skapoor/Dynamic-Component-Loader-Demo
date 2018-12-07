import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicModule } from 'ng-dynamic-component';
import { Dynamic1Component } from '../dynamic1/dynamic1.component';
import { Dynamic2Component } from '../dynamic2/dynamic2.component';
import { DynamicrenderComponent } from './dynamicrender.component';

@NgModule({
  imports: [
    CommonModule,
    DynamicModule.withComponents([ Dynamic1Component, Dynamic2Component ])
  ],
  declarations: [
    Dynamic1Component,
    Dynamic2Component,
    DynamicrenderComponent
  ],
  exports: [
    DynamicrenderComponent
  ]
})
export class DynamicrenderModule { }
