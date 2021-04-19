import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AddstudentComponent } from './addstudent.component';
import { FormsModule } from '@angular/forms';

describe('AddstudentComponent', () => {
  let component: AddstudentComponent;
  let fixture: ComponentFixture<AddstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstudentComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        NgbModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get subjects', () => {
    expect(component.Subjects).toContain;
  });

  it('should submit', () => {
    const data = fixture.nativeElement;
    expect(data.querySelector(".some").textContent).toContain("Submit")
  });
});
