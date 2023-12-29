import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  addUsers(data:any):Observable<any>{
    return this.http.post('  http://localhost:3000/doctors',data);
  }
  viewUsers():Observable<any>{
    return this.http.get('  http://localhost:3000/doctors');
  }
  editUsers(id:number,data:any):Observable<any>{
    return this.http.put(`http://localhost:3000/doctors/${id}`,data);
  }
  deleteUsers(id:number):Observable<any>
  {
    return this.http.delete(`http://localhost:3000/doctors/${id}`);
  }
}
