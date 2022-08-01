import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  

  onSubmit(a:any){
      console.log(a);
      this.service.add(a).subscribe((res)=>{console.log("result",res);})
      this.router.navigate(['/emplist']);
  }
  
  signup = new FormGroup({
    fname : new FormControl("",[Validators.required,Validators.pattern("[A-Z]{1}[a-z]{2,}")]),
    lname : new FormControl("",[Validators.required,Validators.pattern("[A-Z]{1}[a-z]{2,}")]),
    gender : new FormControl("",Validators.required),
    email : new FormControl("",[Validators.required,Validators.email]),
    mobile : new FormControl("",[Validators.required,Validators.pattern("[6-9]{1}[0-9]{9}")]),
    
  })

  constructor(private http:HttpClient,private router:Router,private service:ApiService) { }
  ngOnInit(): void {
  }

}