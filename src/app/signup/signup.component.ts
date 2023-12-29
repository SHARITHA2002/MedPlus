import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})  
export class SignupComponent {
  errormessage="";
  constructor(private auth:AuthService){
  }

  formData=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern("^[a-zA-Z]+$")]),
    email:new FormControl('',[Validators.required,Validators.minLength(4)]),
    gender:new FormControl('female'),
    password:new FormControl('',[Validators.required,Validators.minLength(4)]),
  });

  
  onSubmit(){
    let username:string=this.formData.value['name'] as string;
    let mail:string=this.formData.value['email'] as string;
    let password:string=this.formData.value['password'] as string;
    // let errormessage:string=this.errormessage as unknown as string;
   
    this.auth.register(username,mail,password).subscribe({
      next:data=>{
         this.auth.storeToken(data.idToken);
         console.log("Registered idToken:"+data.idToken);
      },
      error:data=>{
        if(data.error.error.message=="INVALID_EMAIL"){
          this.errormessage="Invalid Mail";
        }
        else if(data.error.error.message=="EMAIL_EXISTS"){
          this.errormessage="Already Existed";                                           
        }
        else{
          this.errormessage="Unknown Error Occured";
        }
      }
    });
  }

get name(){
  return this.formData.get('name');
}
get lastName(){
  return this.formData.get('lastName');
}
get email(){
  return this.formData.get('email');
}
get password(){
  return this.formData.get('password');
}
}
