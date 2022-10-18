import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';

const appRoutes:Routes=[
  {
    path:"",component:LoginComponent
  },
  {
    path:"dashboard",component:DashboardComponent
  },
  {
    path:"addstudent",component:AddStudentComponent
  },
  {
    path:"addfaculty",component:AddFacultyComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    AddStudentComponent,
    AddFacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
