import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private model = 'students';

  constructor(private _http:HttpClient) { }

  getAllStudents(){
    return this._http.get('http://localhost:3000/students');
  }

  getStudentById(id: number){
    return this._http.get( this.getUrl() + '/' + id)
  }

  getAllSubjects(){
    return this._http.get('http://localhost:3000/subjects');
  }
  createStudent(student){

    console.log("Creating Student"+student);
    return this._http.post(this.getUrl(), student);
  }

  updateStudent(student){
    return this._http.put(this.getUrl() + '/' + student.id,student)
  }

  private getUrl(){
    return `${BASE_URL}${this.model}`;
  }
}
