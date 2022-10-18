import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent implements OnInit {

  constructor() { }

  Name=""
  Department=""
  Designation=""
  DOB=""
  EducationalQualification=""
  Address=""
  MobNo=""
  DateOfJoining=""

  status:boolean=false

  readValues=()=>{
    let data ={
   Name:this.Name,
  Department:this.Department,
  Designation:this.Designation,
  DOB:this.DOB,
  EducationalQualification:this.EducationalQualification,
  Address:this.Address,
  MobNo:this.MobNo,
  DateOfJoining:this.DateOfJoining
    }
console.log(data)
this.status=true
  }

  ngOnInit(): void {
  }

}
