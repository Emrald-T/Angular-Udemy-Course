import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  myGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.myGroup = new FormGroup({
      projectData: new FormGroup({
        projName: new FormControl(null, [Validators.required, this.normalValidator]),
        mail: new FormControl(null, [Validators.required, Validators.email]),
      }),
      projStatus: new FormControl('stable')
    });
  }

  normalValidator(control: FormControl): {[key: string]: boolean} {
    if (control.value === 'Test') {
      return {forbiddenValue: true};
    }
    return null;
  }

  onSubmit(): void {
    console.log(this.myGroup.value);
  }
}
