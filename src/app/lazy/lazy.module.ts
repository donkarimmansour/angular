import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { MyhomeComponent } from '../myhome/myhome.component';
import { MysecondComponent } from '../mysecond/mysecond.component';


@NgModule({
  declarations: [
    MyhomeComponent ,
    MysecondComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
