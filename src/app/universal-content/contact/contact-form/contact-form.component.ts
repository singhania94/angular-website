import { Component, OnInit } from '@angular/core';
import { Query } from '../../../query';
import { QueryService } from '../../../query.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private service: QueryService) { }

  ngOnInit() {
  }

  query: Query = new Query('', '', '', '');
  submittedQuery: Query;
  submitted = false;

  onSubmit() { 
    this.service.postQuery(this.query)
      .subscribe(query => this.submittedQuery = query);
    this.submitted = true; 
  }

}
