import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {

  model = {
    firstName: 'John',
    lastName: 'Doe'
  };
    
  constructor() { }

  ngOnInit(): void {
  }
  capitalize() {
        this.model.lastName = this.model.lastName.toUpperCase();
        this.model.firstName= this.model.firstName.toUpperCase();
      }
    

}
