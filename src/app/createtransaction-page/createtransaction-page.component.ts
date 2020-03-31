import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-createtransaction-page',
  templateUrl: './createtransaction-page.component.html',
  styleUrls: ['./createtransaction-page.component.scss']
})
export class CreatetransactionPageComponent implements OnInit {

  form: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.form= new FormGroup({
      username: new FormControl(null,[Validators.required]),
      amount: new FormControl(null,[Validators.required])
    })
  }

}
