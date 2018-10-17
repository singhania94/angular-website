import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.css']
})
export class BriefComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  gotoCode(): void {
    try {
      document.querySelector('#homecode').scrollTo();
      window.location.reload();
    } catch (e) { }
  }

  gotoTeach(): void {
    try {
      document.querySelector('#hometeach').scrollTo();
      window.location.reload();
    } catch (e) { }
  }

  gotoTravel(): void {
    try {
      document.querySelector('#hometravel').scrollTo();
      window.location.reload();
    } catch (e) { }
  }
}
