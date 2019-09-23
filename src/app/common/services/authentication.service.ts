import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/config/api';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  hasSession = false;
  user: any;

  constructor(public _http:HttpClient) {
  }
  public isLoggedIn(){
    // const user = ''''
    return false;
  }
  public login(email: string, password:string){
    const url = `${API.AUTH_SERVICE_BASE_URL}/auth/login`;
    return this._http.post(url, {
      'email':email,
      'password': password
    }) 
   }
}
