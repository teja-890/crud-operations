import { Component, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
dialog:any;
  name: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, 
   public dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    console.log(this.data);
  }
  update(data: any){
   console.log("updated data",this.data);
   console.log("updated data1",data);
   this.dialogRef.close(data);
  //  this.dialog.close({ data: 'you cancelled' })
  }

  closeDialog() {
    this.dialogRef.close("hello");
    // console.log(name);
  }

}
