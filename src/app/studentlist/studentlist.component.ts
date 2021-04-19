import { EdituserComponent } from './edituser/edituser.component';
import { CommonService } from './../common.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalService } from './modal/modal.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  Students: any;
  Subjects: any;
  SelectedSubject: any;
  SelectedData: any;

  constructor(
    private commonservice: CommonService,
    private modalService: ModalService,
    private viewContainerRef: ViewContainerRef,
    private modalservice: NgbModal
    ) {
  }

  ngOnInit(): void {
    this.getSubjectList();
    this.getStudentList();
  }

  getSubjectList(){
    this.commonservice.getAllSubjects().subscribe((response) => {
      this.Subjects = response;
    })
  }

  getStudentList(){
    this.commonservice.getAllStudents().subscribe((response) =>{
      this.Students = response;
      this.SelectedData = response;
    })
  }

  onSelect(val){
    console.log(JSON.stringify(val));
    if(val == "0"){
      this.Students = this.SelectedData;
    }
    else{
    this.Students = this.SelectedData.filter((subject) => subject.Subject == val)
    }
  }

  openModal(e, modalTitle) {
    e.preventDefault();
    console.log(modalTitle)
    this.modalService.setRootViewContainerRef(this.viewContainerRef);
    this.modalService.addDynamicComponent(modalTitle);
    this.getStudentList();
  }

  EditModal(e, modalTitle, student) {
    e.preventDefault();
    console.log(modalTitle, student)
    this.modalService.setRootViewContainerRef(this.viewContainerRef);
    this.modalService.addEditDynamicComponent(modalTitle,student);
    this.getStudentList();
  }
}
