import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'component-login-forms',
  templateUrl: './formsLogin.component.html',
  styleUrls: ['./formsLogin.component.scss']
})
export class FormsLoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _route:Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required]],
      pass: ['',[Validators.required]]
    });
  }

  connectUser(): void {
    if(this.loginForm.invalid || this.loginForm === null){
      this.loginForm.markAllAsTouched();
      return;
    }
    const email = this.loginForm?.get('email')?.value;
    const pass = this.loginForm?.get('pass')?.value;

    const login = {
      usuario: email,
      senha: pass,
    }
    console.log('Estou logado');

    this._route.navigate(['/Dictionary'])
    // this._login.login(login);
    // if(!!window.localStorage.getItem(key)){
    //   this._route.navigate(['/Irep/dashboard'])
    // }

  }
}
