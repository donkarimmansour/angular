import { ComponentFactoryResolver } from '@angular/core';
import { ContentChild, ElementRef, Input, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MysecondComponent } from '../mysecond/mysecond.component';

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.css']
})
export class MyhomeComponent implements OnInit {
  p_c:string = "" ;
  @Input("text_one") text_one:any
  @ViewChild("c_input") c_view : any
  //@ContentChild("p_input") p_view : any
  //@ViewChild("second" , { read : ViewContainerRef}) second! : ViewContainerRef

  constructor(private resolver : ComponentFactoryResolver){
    
  }

  ngOnInit(): void {
  }

  child_print(c_input:any){ 
    this.p_c = c_input.value


    // console.log(this.c_view.nativeElement.value)
    // console.log(this.p_view.nativeElement.value)
    // let bind = this.second.createComponent(this.resolver.resolveComponentFactory(MysecondComponent))
    // bind.instance.title = "my test"
  }
}
