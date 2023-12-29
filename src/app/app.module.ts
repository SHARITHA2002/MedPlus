import { NgModule, signal } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterLink, RouterModule,Routes} from '@angular/router';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddoreditComponent } from './addoredit/addoredit.component';
import { HopitalservicesComponent } from './hopitalservices/hopitalservices.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { ProhealthComponent } from './prohealth/prohealth.component';
import { FooterComponent } from './footer/footer.component';



const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    AboutUsComponent,
    AddoreditComponent,
    HopitalservicesComponent,
    SpecialitiesComponent,
    ProhealthComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
