import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {
  @ViewChild('form1') myForm: NgForm;
  subsDef = 'advanced';
  myData = {};
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
    this.myData = this.myForm.value;
  }
}
