import { Component, OnInit } from '@angular/core';
import { Query } from '../../../query';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  query: Query = new Query(0, 'Aditya', 'Singhania', 'singhania.aditya94@gmail.com', 'How are you doing?', 7798898722);
  submitted = false;

  onSubmit() { 
    this.submitted = true; 
  }

}
