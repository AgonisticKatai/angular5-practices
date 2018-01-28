import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Operation } from '../models/operation.class';

@Component({
  selector: 'ak-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public operationForm: FormGroup;
  public operation: Operation = {
    date: new Date(),
    amount: 0,
    operationType: 1
  };
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.operationForm = this.formBuilder.group({
      date: [this.operation.date.toISOString().substring(0, 10)],
      amount: [this.operation.amount, [Validators.required, this.mustBePositiveNumber]],
      operationType: [this.operation.operationType]
    });
  }
  mustBePositiveNumber(control: AbstractControl) {
    const isInvalid = control.value && (isNaN(control.value) || control.value < 0);
    if (isInvalid) {
      return { '': true };
    }
    return null;
  };
  handleSubmit() {
    console.log(this.operationForm.value);
  }

}
