import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { AddoreditComponent } from '../addoredit/addoredit.component';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(public auth:AuthService,private _dialog:MatDialog){}
  ngOnInit(): void {
      this.auth.canAccess();
  }
  logout(){
    this.auth.logout();
    this.auth.canAccess();
  }
  addDoctors(){
    const dialogRef= this._dialog.open(AddoreditComponent);
    dialogRef.afterClosed().subscribe({
     next:(val)=>{
       if (val){
        //  this.viewUserList();
       }
     }
    })
  }
} 
