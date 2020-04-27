import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Form } from './form';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error("Method not implemented.");
  }
 
  constructor(){}
  model=new Form(1001,"Anmol",23000,".Net");
  
  onSubmit(){
 
    alert(this.model.ID+" "+this.model.Name+" "+this.model.Salary+" "+this.model.Department);
  }
 get FormData(){return JSON.stringify(this.model)}
}
