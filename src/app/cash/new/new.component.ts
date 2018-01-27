import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ak-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public operationForm: FormGroup;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.operationForm = this.formBuilder.group({
      date: [],
      amount: [],
      operationType: []
    });
  }
  handleSubmit() {
    console.log(this.operationForm.value)
  }

}
