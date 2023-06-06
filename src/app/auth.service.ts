
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient, private _Router: Router) { 
    if (localStorage.getItem('userToken')!== null) {
      this.userData();
      
    }
  }




userProfile = new BehaviorSubject (null);
userData(){
  let encoded: any = localStorage.getItem('userToken');
  let decoded: any =jwtDecode(encoded);
  console.log(decoded);
  this.userProfile.next(decoded)
}
register(data: FormGroup):Observable<any>{
  return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signup',data)

}
login(data: FormGroup):Observable<any>{
  return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signin',data)

}
logout(){
  localStorage.removeItem('userToken');
  this.userProfile.next(null);
  this._Router.navigate(['/login'])


}
}




