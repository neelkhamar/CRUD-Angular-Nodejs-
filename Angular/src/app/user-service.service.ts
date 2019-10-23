import { Injectable } from '@angular/core';
import { User } from "./user";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  
  viewUrl = "http://localhost:3000/api/view";
  createUrl = "http://localhost:3000/api/create";
  deleteUrl = "http://localhost:3000/api/delete/";
  updateUrl = "http://localhost:3000/api/edit/"

  // Post request for saving data
  createUser(user:User):Observable<User>{
    
    let httpheaders = new HttpHeaders().set('Content-Type','application/Json');
    let options={
      headers: httpheaders
    };
    return this.http.post<User>(this.createUrl, user, options);
  }

  // Get request to load data from database
  getUser():Observable<User[]>{
    return this.http.get<User[]>(this.viewUrl);
  }

  // Delete a user
  deleteUser(userId:String):Observable<any>{
    return this.http.delete<any>(this.deleteUrl+userId);
  }

  // Update a user
  updateUser(userData:User, userId:String):Observable<User>{
    let httpheaders = new HttpHeaders().set('Content-Type','application/Json');
    let options={
      headers: httpheaders
    };
    return this.http.put<User>(this.updateUrl+userId,userData,options);
  }

}
