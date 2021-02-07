import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyhomeComponent } from './myhome/myhome.component';
import { MysecondComponent } from './mysecond/mysecond.component';
import { createCustomElement } from '@angular/elements';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent] ,
  // entryComponents : [
  //   AppComponent
  // ]
})
export class AppModule {

  //  constructor(private injector : Injector){}

  // ngDoBootstrap(){
  //   const ae = createCustomElement(AppComponent , { injector : this.injector } )
  //   customElements.define("app-ae" , ae )
  // }

 }
