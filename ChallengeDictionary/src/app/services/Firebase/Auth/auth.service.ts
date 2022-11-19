import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import { ModelLogin } from './Types/modelLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _fireAuth: AngularFireAuth,
    private _router: Router
  ) { }

  // Login
  public login(login: ModelLogin): void {
    this._fireAuth.signInWithEmailAndPassword(login.email, login.pass).then(() => {
      localStorage.setItem('token', 'true');
      this._router.navigate(['/dictionary']);
    }, err => {
      alert('Something went wrong: ' + err.message);
      this._router.navigate(['/login']);
    }
    );
  }

  // Register
  public register(register: ModelLogin): void {
    console.log(register);
    this._fireAuth.createUserWithEmailAndPassword(register.email, register.pass).then(() => {
      alert('Registration Successful');
      this._router.navigate(['/login']);
    }, err => {
      alert('Error: ' + err.message);
      this._router.navigate(['/register']);
    }
    );
  }

  public logout(): void {
    this._fireAuth.signOut().then(() => {
      localStorage.removeItem('token');
      this._router.navigate(['/login']);
    }, err => {
      alert('Error: ' + err.message);
    }
    );
  }
}
