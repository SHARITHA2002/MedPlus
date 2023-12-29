import { Component,Inject,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { first } from 'rxjs';
import { UsersService } from '../services/users.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-addoredit',
  templateUrl: './addoredit.component.html',
  styleUrls: ['./addoredit.component.css']
})
export class AddoreditComponent implements OnInit{
  
  constructor(
    private userService:UsersService, 
    private _dialogRef:MatDialogRef<AddoreditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any)
  {
  }
 qualification!:Qualification;
 qualificationList:Qualification[]=[
        new Qualification("1","Under Graduate"),
        new Qualification("2","Post Graduate")
 ];

 regForm=new FormGroup(
  {
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    email:new FormControl(''),
    gender:new FormControl(''),
    dob:new FormControl(''),
    qualify:new FormControl(''),
    specialization:new FormControl(''),
    experience:new FormControl('')
  }

 )
ngOnInit(): void {
  this.regForm.patchValue(this.data);
}
onSubmit(){
  console.log(this.regForm.value);
  if (this.regForm.valid){
    console.log(this.regForm.value);
   if(this.data)
   {
      this.userService.editUsers(this.data.id,this.regForm.value).subscribe({
        next:(value:any)=>{
          alert("Users Updated  Successfully");
          this._dialogRef.close(true);
        },
        error:(err:any)=>{
          console.log(err);
        }
      });
   }
   else
   {
      this.userService.addUsers(this.regForm.value).subscribe({
        next:(value:any)=>{
          alert("Users added Successfully");
          this._dialogRef.close(true);
        },
        error:(err:any)=>{
          console.log(err);
        }
      });
   }
  }
  else{
    console.log("Error!Form Invalid");
  }
}
get firstName(){
  return this.regForm.get('firstName');
}
get lastName(){
  return this.regForm.get('lastName');
}
get email(){
  return this.regForm.get('email');
}
get gender(){
  return this.regForm.get('gender');
}
get dob(){
  return this.regForm.get('dob');
}
get qualify(){
  return this.regForm.get('qualification');
}
get specialization()
{
  return this.regForm.get('specialization');
}
get experience(){
  return this.regForm.get('experience');
}


cancelForm(){
  this.regForm.reset();
}
}
class Qualification{
    id:string;
    name:string;
constructor(id:string,name:string){
    this.id=id;
    this.name=name;
}
}