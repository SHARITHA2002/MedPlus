import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router,private http:HttpClient) { }

  isAuthenticated():boolean{
      if(sessionStorage.getItem('token')!==null){
        return true;
      }
      else{
        return false;
      }
  }
  canAccess(){
    if(!this.isAuthenticated()){
      this.router.navigate(['/login']);
    }
  }
  canAuthenticate(){
    if(this.isAuthenticated()){
      this.router.navigate(['']);
    }
  }
  register(name:string,email:string,password:string){
    return this.http.post<{idToken:string}>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNvS02MjXd-Fs8UjEz68n7B2jE6sIaVhI',
    {
      displayName:name,
      password:password,
      email:email
    });
  }
  storeToken(token:string){
    sessionStorage.setItem('token',token);
  }

  login(email:string,password:string){
    return this.http.post<{idToken:string}>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCNvS02MjXd-Fs8UjEz68n7B2jE6sIaVhI',{
      email:email,
      password:password
    });
  }

  detail(){
    let token=sessionStorage.getItem('token');
    return this.http.post<{
      users:Array<{
        localId:string,
        displayName:string
      }>
    }>('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCNvS02MjXd-Fs8UjEz68n7B2jE6sIaVhI',{
      idToken:token
    })
  }
  logout(){
    sessionStorage.removeItem('token');
  }
}
