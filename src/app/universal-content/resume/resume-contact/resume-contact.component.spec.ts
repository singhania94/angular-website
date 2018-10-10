import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeContactComponent } from './resume-contact.component';

describe('ResumeContactComponent', () => {
  let component: ResumeContactComponent;
  let fixture: ComponentFixture<ResumeContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
