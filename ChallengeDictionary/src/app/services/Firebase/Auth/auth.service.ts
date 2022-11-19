import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

// APP
import { ModelLogin } from './Types/modelLogin';
import { UsersService } from '../Users/Users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _fireAuth: AngularFireAuth,
    private _router: Router,
    private _user: UsersService
  ) { }

  // Login
  public login(login: ModelLogin): void {
    this._fireAuth.signInWithEmailAndPassword(login.email, login.pass).then((token) => {
      console.log(token);
      localStorage.setItem('token', 'true');
      localStorage.setItem('user', login.email);
      this._router.navigate(['/dictionary/list']);
    }, err => {
      alert('Something went wrong: ' + err.message);
      this._router.navigate(['/login']);
    }
    );
  }

  // Register
  public register(register: ModelLogin): void {
    this._fireAuth.createUserWithEmailAndPassword(register.email, register.pass).then(() => {
      console.log('Registration Successful');
      this._user.setUser(register.email, [], []);
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
