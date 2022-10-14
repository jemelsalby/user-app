import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private myRouter:Router) { }
userName=""
password=""

readValue=()=>{
  let data={
    "userName":this.userName,
    "password":this.password
  }
  if (this.userName=="admin" && this.password=="12345") {
    this.myRouter.navigate(["/dash"])
    
  } else {
    alert("invalid credential")
  }
  console.log(data)

  this.userName=""
  this.password=""
}

  ngOnInit(): void {
  }

}
