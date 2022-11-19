import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'app/services/Firebase/Auth/auth.service';
@Component({
  selector: 'component-forms-register',
  templateUrl: './forms-register.component.html',
  styleUrls: ['./forms-register.component.scss']
})
export class FormsRegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  connectUser(): void {
    if (this.registerForm.invalid || this.registerForm === null) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const register = {
      email: this.registerForm.get('email').value,
      pass: this.registerForm.get('pass').value,
    };

    // Register User Standart
    this._auth.register(register);
  }

}
