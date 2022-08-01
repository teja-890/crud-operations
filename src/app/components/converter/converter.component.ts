import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  num1!:number;
  result!:number;
  name="sai";
  val:any;

    constructor() { 
      var arr = [3, 6, 2, 56, 32, 5, 89, 32];
      var largest = arr[0];
      for (var i = 0; i < arr.length; i++) {
      if (largest < arr[i] ) {
        largest = arr[i];
    }
  }
  console.log(largest);

  var a=[4,44,7,5,23];
  console.log(a.sort());
   let b = a.sort((a, b) => a - b)
  console.log(b);
   let x = b[b.length-1]
  console.log(x);

  console.log(Math.max(...a));
  console.log(Math.min(...a));

  console.log("................................")

  of([10,20,30]).subscribe(obj => {this.val=obj})
  console.log(this.val);
  of([10,20,30]).subscribe(obj => {this.val = obj + "hai"})
  console.log(this.val);
  from([10,20,30]).subscribe(obj => {this.val += obj + ":hai "})
  console.log(this.val);
}



    ngOnInit(): void {
      
    }

  } 