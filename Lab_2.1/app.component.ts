import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab21';
  id:number;
name:string;
salary:number;
department:string;
  Emp=[
    {'id':1001,'name':"Rahul",'salary':9000,'department':"Java"},
    {'id':1002,'name':"Sachin",'salary':19000,'department':"OraApps"},
    {'id':1003,'name':"Vikash",'salary':29000,'department':"BI"}
    ] 
  
  Add () {
      var employee={id:this.id,name:this.name,salary:this.salary,department:this.department};
      this.Emp.push(employee);
  }
  onSubmit()
  {
    alert(this.id+" "+this.name+" "+this.salary+" "+this.department);
  }
delete(id:number)
{
  for (let i = this.Emp.length - 1; i>= 0; i--) {
      if (this.Emp[i].id === id) {
          this.Emp.splice(i, 1);
      }
  }
}
newid:number;
newname:string;
newsalary:number;
newdepartment:string;
update(id:number,name:string,salary:number,department:string)
{
  this.newid=id;
  this.newname=name;
  this.newsalary=salary;
  this.newdepartment=department;
  }
editrow(id:number,name:string,salary:number,department:string)
{
  for(let i=0;i<this.Emp.length;i++){
    let e=this.Emp[i];
    if(e.id==id){
      console.log(name);
      this.Emp.splice(i,1);  
      this.Emp.push({id,name,salary,department});
      console.log(e.name);
      break;
    }
}
}

}