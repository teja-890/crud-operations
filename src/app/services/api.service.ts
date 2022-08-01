import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private http:HttpClient) { }

  add(a:any){
    return this.http.post("http://localhost:3000/posts",a)
  }
  get(){
    return this.http.get("http://localhost:3000/posts")   
  }
  delete(id:any){
    return this.http.delete("http://localhost:3000/posts/"+id)
   }
  update(a:any){
    return this.http.put("http://localhost:3000/posts/"+a.id,a)
   }
}