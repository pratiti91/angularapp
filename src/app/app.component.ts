import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  ename="Pratiti Bhattacharjee";
  project="Spring Boot";
  projectUI="Angular 8"
  display(){
    alert("Welcome to angular");
  }
  uname=new FormControl();
  updateName(){
    this.uname.setValue("Pratiti");
  }
  p:number=0;
  s:number=0;
  jtall=false;
  p_height=new FormControl(0);
  s_height=new FormControl(0);
  findTall(){
  this.p=Number(this.p_height.value);
  this.s=Number(this.s_height.value);
  if(this.p>this.s)
  this.jtall=true;
  else
  this.jtall=false;
  alert("Function is called")
}

}

