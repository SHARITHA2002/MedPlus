import { AuthService } from './../_services/auth.service';
import { Component,OnInit } from '@angular/core';
import { matDialogAnimations } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  constructor(private authname:AuthService)
  {}
  public isOpen_specialities=true;
  public isOpen_proHealth=false;
  user={localId:"",displayname:""};
  ngOnInit(): void {
    this.authname.canAccess();
    if(this.authname.isAuthenticated()){
      this.authname.detail().subscribe({
        next:data=>{
          this.user.localId=data.users[0].localId;
          this.user.displayname=data.users[0].displayName;
        }
      })
    }
  }

  openSpecialities(){
    console.log("Opened Specialities");
    this.isOpen_proHealth=false;
    this.isOpen_specialities=true;
  }
  openProHealth(){
    console.log("opening Pro Health")
    this.isOpen_proHealth=true;
    this.isOpen_specialities=false;

  }
}
