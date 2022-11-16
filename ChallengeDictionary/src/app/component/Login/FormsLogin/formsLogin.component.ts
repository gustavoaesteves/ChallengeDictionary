import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/services/Firebase/Auth/auth.service';
import { IncludeWordsService } from 'app/services/Firebase/IncludeWords/IncludeWords.service';

import { getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import { environment } from 'environments/environment';

const app = initializeApp(environment.firebase);

@Component({
  selector: 'component-login-forms',
  templateUrl: './formsLogin.component.html',
  styleUrls: ['./formsLogin.component.scss']
})
export class FormsLoginComponent implements OnInit {

  db = getFirestore(app);

  public loginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _auth: AuthService,
    private _test: IncludeWordsService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required]]
    });
  }

  connectUser(): void {
    if (this.loginForm.invalid || this.loginForm === null) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const login = {
      email: this.loginForm.get('email').value,
      pass: this.loginForm.get('pass').value,
    };

    // Set all Words in Firebase - Saved 6510 words limit firebase no cost
    // this.words.forEach(async (word, index) => {
    //   await this._test.setDatas(this.db, word, index);
    // });

    // Register User Standart
    // this._auth.register(login);

    // Login User
    this._auth.login(login);
  }
}
