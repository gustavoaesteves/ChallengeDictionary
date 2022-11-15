import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/Firebase/Auth/auth.service';

@Component({
  selector: 'component-login-forms',
  templateUrl: './formsLogin.component.html',
  styleUrls: ['./formsLogin.component.scss']
})
export class FormsLoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _route: Router,
    private _auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['',[Validators.required]]
    });
  }

  connectUser(): void {
    if(this.loginForm.invalid || this.loginForm === null){
      this.loginForm.markAllAsTouched();
      return;
    }

    const login = {
      email: this.loginForm.get('email').value,
      pass: this.loginForm.get('pass').value,
    };

    // this._auth.register(login);
    this._auth.login(login);
  }
}
