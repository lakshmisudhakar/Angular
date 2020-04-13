import { Signup } from './signup.model';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {
  model: Signup = new Signup();
  @ViewChild('f', {static: true}) form: any;

  langs: string[] = [
    'English',
    'French',
    'German',
  ];


  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      this.form.reset();
    }
  }

}
