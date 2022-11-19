import { collection } from 'firebase/firestore/lite';
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';

//Firebase
import { getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import { getDocs, doc, setDoc } from 'firebase/firestore/lite';

// App
import { environment } from 'environments/environment';
import { NotificationService } from 'app/services/Toastr/Toastr.service';

const app = initializeApp(environment.firebase);
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private db = getFirestore(app);

  constructor(private not: NotificationService) { }

  // Register User for favorites and historic
  public async setUser(email: string, favorite: number[], historic: number[]): Promise<void> {
    try {
      const special1 = doc(this.db, 'users', `${email}`);
      await setDoc(special1, { favorite: favorite, historic: historic}, { merge: true })
      .catch(() => this.not.showError('Error, try again',' Register'))
      .finally(() => console.log('Salve'));
    } catch (err) {
      return err;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getUsers(): Promise<any> {
    try {
      return await getDocs(collection(this.db, 'users')).catch(() => this.not.showError('Error, try again',' Get Data user'))
      .finally(() => console.log('Getted'));
    } catch (err) {
      return err;
    }
  }
}
