import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LazyModule } from './lazy/lazy.module';
import { MyhomeComponent } from './myhome/myhome.component';
import { MysecondComponent } from './mysecond/mysecond.component';

const routes: Routes = [
 { path : "" , component : AppComponent } ,
 { path : "home" , loadChildren : () => import("./lazy/lazy.module").then(module => module.LazyModule ) } ,
 //{ path : "home" , loadChildren : "./lazy/lazy.module#LazyModule" } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
