import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form-demo',
  templateUrl: './template-form-demo.component.html',
  styleUrls: ['./template-form-demo.component.css']
})
export class TemplateFormDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
option:any;
id:any;
value:any;
  productAvailable=[
    { id:1,value:'Yes'},
    { id:2,value:'No'}
  ]
  default:string="Mobile"
 onSubmit(form:NgForm){
   console.log(form)
 }
}
