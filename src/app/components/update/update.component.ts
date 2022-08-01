import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
aa:any;
  signup = new FormGroup({
    fname : new FormControl("",[Validators.required,Validators.pattern("[A-Z]{1}[a-z]{2,}")]),
    lname : new FormControl("",[Validators.required,Validators.pattern("[A-Z]{1}[a-z]{2,}")]),
    gender : new FormControl("",Validators.required),
    email : new FormControl("",[Validators.required,Validators.email]),
    mobile : new FormControl("",[Validators.required,Validators.pattern("[6-9]{1}[0-9]{9}")]),
    
  })
  
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute,private ser:ApiService) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params)
      let id =JSON.parse(params['a']);
      console.log(id)
      this.ser.get().subscribe((allData: any) => {console.log(allData)
        this.aa = allData.find((item: any) => item.id === id)
        console.log(this.aa)
        this.signup.setValue(this.aa);
      })
  })
  }
  updatedata() {
    let data = this.signup.value;
    console.log(data)
    data.id = this.aa.id
    this.ser.update(data).subscribe((res)=>{console.log("result",res);})
    console.log(this.signup.value)
    this.router.navigate(['/emplist']);
  }
}