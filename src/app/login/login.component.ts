import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string ='';
  isLoading: boolean = false;
 loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required,Validators.email]),
    password: new FormControl(null, [Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{7,16}$/)]),
  
  })


constructor(private _AuthService:AuthService, private _Router:Router){}
loginUser(data:FormGroup){
    this.isLoading=true;

    this._AuthService.login(data.value).subscribe({
      next: (res)=>{console.log(res);
        if(res.message == "success"){
          localStorage.setItem('userToken',res.token )
          this._Router.navigate(['/home'])
          this._AuthService.userData()
        }
       }, 
      error: (myErrors)=>{ 
        console.log(myErrors.error.errors.message)
        this.errorMessage=myErrors.error.errors.message;
        this.isLoading=false;

        /* 
        lw ht8eir fe text el errro msg
        if(errorMessage == 'Email already in use'){  //de msg el tl3a f error mn api
          this.errorMessage='same email'

        }
          */ 

      }, 
      complete: ()=>{ this.isLoading=false;}


    })
 
  }

}
