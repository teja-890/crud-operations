import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
data:any;

  constructor(private http:HttpClient, private router:Router,private route:ActivatedRoute, private service:ApiService) { }

  ngOnInit(): void {
    this.getdata()
    console.log(this.data);
  }

    getdata(){
      this.service.get().subscribe((res: any)=>{this.data=res;console.log(this.data);})
  
    }
}
