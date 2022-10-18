import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  username = ""
  password = ""

  // readValues = ()=>{
  //   let data = {
  //     "username":this.username,
  //     "password":this.password
  //   }
  //   if(this.username == "admin" && this.password == "admin"){

  //   }
  // }

  ngOnInit(): void {
  }

}
