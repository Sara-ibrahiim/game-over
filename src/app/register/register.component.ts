import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  errorMessage: string ='';
  isLoading: boolean = false;
  registerForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3),Validators.maxLength(10)]),
    email: new FormControl(null, [Validators.required,Validators.email]),
    password: new FormControl(null, [Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{7,16}$/)]),
    rePassword: new FormControl(null , [Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{7,16}$/)]),
    phone: new FormControl(null ,[ Validators.required,Validators.pattern(/^(022)?01[0125][0-9]{8}$/)])
  

  },{validators: this.matchPassword})


  constructor(private _AuthService:AuthService, private _Router:Router){}
  matchPassword(form:any){
     let pass = form.get('password');
     let repass = form.get('rePassword');

     if (pass.value === repass.value ) {
      return null
      
     }else{
      return form.get('rePassword').setErrors({match: 'not matches'});
     }
    }
  

  registerUser(data:FormGroup){
    this.isLoading=true;

    this._AuthService.register(data.value).subscribe({
      next: (res)=>{console.log(res);
        if(res.message == "success"){
          this._Router.navigate(['/login'])
        }
       }, 
      error: (myErrors)=>{ 
        console.log(myErrors.error.errors.msg)
        this.errorMessage=myErrors.error.errors.msg;
        this.isLoading=false;

   

      }, 
      complete: ()=>{ this.isLoading=false;}


    })
 
  }

}