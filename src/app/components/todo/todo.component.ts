import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
name:string="";
a:any=[];

  constructor(public dialog : MatDialog){
    this.a=[{name:"sai"}]
   }

  ngOnInit(): void {}

  add(){
    if(this.name!=""){
  this.a.push({
    name:this.name,
  });}else{
    alert("enter the name");
  }
  this.name="";
  }
  delete(a:number){
  //  this.a=this.a.filter((k,i)=>i!=z);
   this.a.splice(a,1);
   console.log("employee is deleted");
  }
  openDialog(name:string,i:any){
    console.log(name);
    let ab=this.dialog.open(DialogComponent, {data: {name: name}});

  ab.afterClosed().subscribe((result:any) => {
    if(result!="hello"){
      console.log(name);
      this.a[i].name=result;
   }
    console.log(result);
  })
}
}
