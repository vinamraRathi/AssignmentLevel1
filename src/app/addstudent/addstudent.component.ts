import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  Subjects: any;
  Student: any;
  //Input Data
  Name:string;
  email: string;
  BirthDate: string;
  Gender = 'Male';
  Subject: string;
  Active = true;

  constructor(private commonservice: CommonService) { }

  ngOnInit(): void {
    this.getSubjectList();
  }

  getSubjectList(){
    this.commonservice.getAllSubjects().subscribe((response) => {
      this.Subjects = response;
    })
  }

  addStudent(){
    this.Student = {

      Name: this.Name,
      email: this.email,
      Birthdate: this.BirthDate,
      Gender: this.Gender,
      Subject: this.Subject,
      Active: this.Active
    }
    console.log(this.Student);
    this.commonservice.createStudent(this.Student).subscribe((response) => {
      console.log("Student Added Successfully!" + this.Student);
    })
  }
}
