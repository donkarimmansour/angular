import { Component, ViewEncapsulation } from '@angular/core';

@Component({ 
  selector: 'app-root',  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  encapsulation : ViewEncapsulation.ShadowDom
})   
export class AppComponent {
  p_p:string = "" ;
  mytext:string = "mytext tow three four five" 

  parent_print(p_input:any){ 
    this.p_p = p_input.value
  }

  constructor(){
    const worker = new Worker("./myworker.worker" , { type : "module" })
    worker.postMessage("say hey worker")
    worker.onmessage = ({data}) => console.log(data)
  }
}
