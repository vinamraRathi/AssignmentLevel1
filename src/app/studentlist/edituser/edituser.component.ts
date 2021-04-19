import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {


  @Input() modalTitle: string;
  @Input() student: any;

  Subjects: any;
  BirthDate: string;
  Subject: string;

  @Input() id:number;
  @Input() Name:string;
  @Input() email:string;
  @Input() Birthdate:any;
  @Input() Gender:string;
  @Input() newSubject:string;
  @Input() Active:boolean;
  @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();
  constructor(private commonservice: CommonService) { }

  ngOnInit(): void {
    this.getSubjectList();
    this.getStudentByid(this.id)
    console.log("Is this working? " + this.newSubject)
  }

  getSubjectList(){
    this.commonservice.getAllSubjects().subscribe((response) => {
      this.Subjects = response;
    })
  }

  getStudentByid(id){
    this.commonservice.getStudentById(id).subscribe((response) => {
      this.student = response;
      this.Birthdate = this.student.Birthdate
      this.Subject = this.student.Subject
      this.newSubject = this.student.Subject
      this.BirthDate = this.student.Birthdate.day + '/' + this.student.Birthdate.month + '/' + this.student.Birthdate.year
      console.log("id student ", this.newSubject)
    })
  }

  close(event) {
        this.closeModal.emit(event);
    }


    EditStudent(){
      this.student = {
        id: this.id,
        Name: this.Name,
        email: this.email,
        Birthdate: this.Birthdate,
        Active: this.Active,
        Gender: this.Gender,
        Subject: this.newSubject,
      }
      console.log(this.newSubject, "editted student", this.Subject)
      this.commonservice.updateStudent(this.student).subscribe((response) => {
        console.log("STUDENT Editted successfully", this.student)
        this.commonservice.getAllStudents().subscribe((response) => {
          console.log("Getting Updated list")
        });
      })
    }

}
