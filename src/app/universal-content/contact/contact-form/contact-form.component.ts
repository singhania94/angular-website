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
  beingSubmitted = false;
  submittedQuery: Query;
  submitted = false;

  onSubmit() {
    this.beingSubmitted = true;

    this.service.postQuery(this.query)
      .subscribe(query => this.submittedQuery = query);
    
      /*while(this.submitted == false) {
      if (this.submittedQuery == this.query) {
        this.beingSubmitted = false;  
        this.submitted = true; 
      }
    }*/
  }

}
