import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {
  data: any[] = [];

  
  public empDetial ! : FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router:Router,private dataService: DataService ) { }
  

  ngOnInit() {
    this.dataService.getData().subscribe((result:any) => {
      this.data = result.signup;
      console.log(this.data)
    });
  }


// this.empDetial = this.formBuilder.group({
//   EmployeeID:[''],
//   FirstName:[''],
//   LastName:[''],
//   Email:[''],
//  MobileNo:[''],
//  Salary:[''] 
// })
// }

addEmployee() {
  console.log(this.empDetial);
}

}

