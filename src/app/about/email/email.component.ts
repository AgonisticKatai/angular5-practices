import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
      sender: ['Nacho', Validators.required],
      subject: ['', Validators.required],
      body: ['']
    });
  }

  handleSubmit() {
    console.log(this.messageForm.value);
  }

}
