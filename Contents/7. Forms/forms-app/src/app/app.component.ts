import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  genders = ['male', 'female'];
  /** Used for template approach */
  // @ViewChild('myForm') signUpForm: NgForm;
  // username = '';
  // answer = '';
  // submitted = false;
  // userInfo = {
  //   user: '',
  //   email: '',
  //   secretQ: '',
  //   answer: '',
  //   gender: ''
  // };
  signUpForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Pratt'];

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        user: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      }),
      email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });
  }

  suggestUserName(): void {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    // this.signUpForm.form.patchValue({
    //   userData: {
    //     username: suggestedName
    //   }
    // });
  }

  // onSubmit(form: NgForm): void {
  //   console.log(form);
  // }

  getControls(): FormArray{
    return (this.signUpForm.get('hobbies') as FormArray);
  }

  onAddHobby(): void {
    const control = new FormControl(null, Validators.required);
    (this.signUpForm.get('hobbies') as FormArray).push(control);
  }

  onSubmit(): void {
    console.log(this.signUpForm);
    // this.submitted = true;
    // this.userInfo.user = this.signUpForm.value.userData.username;
    // this.userInfo.email = this.signUpForm.value.userData.email;
    // this.userInfo.secretQ = this.signUpForm.value.secret;
    // this.userInfo.answer = this.signUpForm.value.questionAnswer;
    // this.userInfo.gender = this.signUpForm.value.gender;
  }

  forbiddenNames(control: FormControl): {[key: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {nameIsForbidden: true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({emailIsForbidden: true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }
}
