import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }
  obs=new Observable((e)=>{
    e.next("11");
    e.next("22");
})
  prom=new Promise(e=>{
    e("hello");
    e("hellllllll");
    // setTimeout(() => {
    //   e("hello");
    // }, );
    setTimeout(() => {
      e("hello world");
    }, 2000);
})

  ngOnInit(): void {
    this.obs.subscribe((e)=>{console.log("observable : ",e)})
    this.prom.then((e)=>{console.log("promise : ",e)})
  }

}
