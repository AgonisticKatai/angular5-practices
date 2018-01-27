import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';

@Component({
  selector: 'ak-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  public messageForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.messageForm = this.formBuilder.group({
      sender: [[]],
      subject: [[]],
      body: [[]]
    });
  }

  handleSubmit() {
    console.log(this.messageForm.value)
  }

}
