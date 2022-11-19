import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

//Firebase
import { getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import { doc, setDoc } from 'firebase/firestore/lite';

// APP
import { ModelLogin } from './Types/modelLogin';
import { environment } from 'environments/environment';

const app = initializeApp(environment.firebase);

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private db = getFirestore(app);

  constructor(
    private _fireAuth: AngularFireAuth,
    private _router: Router
  ) { }

  // Login
  public login(login: ModelLogin): void {
    this._fireAuth.signInWithEmailAndPassword(login.email, login.pass).then((token) => {
      console.log(token);
      localStorage.setItem('token', 'true');
      this._router.navigate(['/dictionary']);
    }, err => {
      alert('Something went wrong: ' + err.message);
      this._router.navigate(['/login']);
    }
    );
  }

  // Register User for favorites and historic
  public async setDatas(email: string, favorite: number[], historic: number[]): Promise<void> {
    try {
      const special1 = doc(this.db, 'users', `${email}`);
      await setDoc(special1, { historic: historic, favorite: favorite }, { merge: true }).finally(() => console.log('Successful'));
    } catch (err) {
      return err;
    }
  }

  // Register
  public register(register: ModelLogin): void {
    console.log(register);
    this._fireAuth.createUserWithEmailAndPassword(register.email, register.pass).then(() => {
      console.log('Registration Successful');
      this.setDatas(register.email, [12,12,12], [1999]);
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
