import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyhomeComponent } from '../myhome/myhome.component';
import { MysecondComponent } from '../mysecond/mysecond.component';

const routes: Routes = [
 { path : "" , component : MyhomeComponent } ,
 { path : "second" , component :MysecondComponent } ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
