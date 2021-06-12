import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import {ControlValidation} from '../util/control.validation';
import {FormComponentBase} from '../util/form.component.base';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent extends FormComponentBase implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      familyName: ['', Validators.required],
      gender: ['', Validators.required],
    });
    super.initForm();
  }

  onSubmitForm(): void {
    super.updateForm();
  }

  updateForm(): void {
    super.updateForm();
  }


  submitFormControl(controlName: string): void {
    // @ts-ignore
    const formValue = this.form.value;
    let data = {};
    data[controlName] = this.form.controls[controlName].value;
    this.userService.submit(data).then(
      response => { // Success
        //this.router.navigate(['/registration/confirm']);
        console.log("submited!");
      },
      error => { // Error
        //this.showFormHttpResponseErrors(error.error);
      });
  }

  refreshControls(): void {
    this.userService.refresh().then(
      response => { // Success
        this.refreshControlsValue(response);
      },
      error => { // Error
        //this.showFormHttpResponseErrors(error.error);
      });
  }
}
