import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth: AuthService) { }
  errormessage = "";
  formData = new FormGroup({
    // name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern("^[a-zA-Z]+$")]),
    email: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required])

  });
  ngOnInit(): void {
    this.auth.canAuthenticate();
  }
  onSubmit() {
    let email: string = this.formData.value['email'] as string;
    let password: string = this.formData.value['password'] as string;
    console.log(this.formData.value);
    this.auth.login(email, password).subscribe({
      next: data => {
        this.auth.storeToken(data.idToken);
        console.log("Login idToken:" + data.idToken);
        this.auth.canAuthenticate();
      },
      error: data => {
        if (data.error.error.message == "INVALID_EMAIL") {
          this.errormessage = "Invalid Email";
        }
        else if (data.error.error.message == "INVALID_PASSWORD") {
          this.errormessage = "Invalid Password";
        }
        else {
          this.errormessage = "User Not exist";
        }
      }
    })
  }

  // get name(){
  //   return this.formData.get('name');
  // }
  get email() {
    return this.formData.get('email');
  }
  get password() {
    return this.formData.get('password');
  }
}
