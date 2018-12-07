import { Component, OnInit } from '@angular/core';
import { Dynamic1Component } from '../dynamic1/dynamic1.component';

@Component({
  selector: 'app-dynamic',
  template: `<ndc-dynamic [ndcDynamicComponent]="component"></ndc-dynamic>`,
  styleUrls: ['./dynamicrender.component.css']
})
export class DynamicrenderComponent implements OnInit {
  component =  Dynamic2Component;
  constructor() { }

  ngOnInit() {
  }

}import { Dynamic2Component } from '../dynamic2/dynamic2.component';