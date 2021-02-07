import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mysecond',
  templateUrl: './mysecond.component.html',
  styleUrls: ['./mysecond.component.css']
})
export class MysecondComponent implements OnInit {
 
@Input("title") title: any

  constructor() { }

  ngOnInit(): void {
  }

}
