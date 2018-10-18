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
      document.querySelector('#homecode').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      //window.location.reload();
    } catch (e) { }
  }

  gotoTeach(): void {
    try {
      document.querySelector('#hometeach').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      //window.location.reload();
    } catch (e) { }
  }

  gotoTravel(): void {
    try {
      document.querySelector('#hometravel').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      //window.location.reload();
    } catch (e) { }
  }
}
