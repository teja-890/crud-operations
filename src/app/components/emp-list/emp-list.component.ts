import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  data: any;
  gen:any;
  z:any;

  constructor(private http:HttpClient, private router:Router,private route:ActivatedRoute, private service:ApiService) { }

  ngOnInit(): void {
    this.getdata()
   console.log(this.data);
  }
  
    getdata(){
      this.service.get().subscribe((res: any)=>{this.data=res;console.log(this.data);}) 
      
    }
    deletedata(id:any){
      this.service.delete(id).subscribe((res)=>{alert("deleted");
      this.getdata()
      console.log(res);})
    }
    editdata(a:any){
        console.log(a);
        this.router.navigate(['/update'],{queryParams : {a:JSON.stringify(a)}});
       console.log();
    }   

}