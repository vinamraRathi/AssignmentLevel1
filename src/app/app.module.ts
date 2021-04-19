import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { FormsModule } from '@angular/forms';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { NgbModule, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './studentlist/modal/modal.component';
import { ModalService } from './studentlist/modal/modal.service';
import { EdituserComponent } from './studentlist/edituser/edituser.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentlistComponent,
    AddstudentComponent,
    ModalComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [
    HttpClient,
  ],
  bootstrap: [AppComponent]
  })
export class AppModule { }
