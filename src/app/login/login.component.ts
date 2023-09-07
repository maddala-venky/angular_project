import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login:FormGroup|any;
  constructor(private _http:HttpClient, private _route:Router) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      'fname': new FormControl(),
      'password': new FormControl()
    })
  }
  logindata(login:FormGroup){
   // console.log(this.login.value);
    this._http.get<any>("http://localhost:3000/signup")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        debugger
        console.log("a================>",a);
        console.log("this.login================>",this.login.value  );
        return a.fname === this.login.value.fname && a.password === this.login.value.password
      });
console.log("user===>",user)
      if(user){
        alert('you are successfully login');
        this.login.reset();
        this._route.navigate(['dashboard']);
      }else{
        alert('User Not Found');
        this._route.navigate(['login']);
      }

    }, err=>{
      alert('Something was wrong');
    })
   

  }

  sbtn1(){
    $('.form-box').css('display','none');
    $('.form-box1').css('display','block');
  }

}

