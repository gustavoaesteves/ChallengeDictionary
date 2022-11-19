/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';

//Firebase
import { getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore/lite';

// App
import { environment } from 'environments/environment';

const app = initializeApp(environment.firebase);
@Injectable({
  providedIn: 'root'
})
export class WordsService {

  private db = getFirestore(app);

  constructor() { }

  public async setDatas(word: string, id: number): Promise<void> {
    try {
      const special1 = doc(this.db, 'allWords', `${id}`);
      await setDoc(special1, { word: word }, { merge: true }).finally(() => console.log('Successful'));
    } catch (err) {
      return err;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getDatas(): Promise<any> {
    return await getDocs(collection(this.db, "allWords"));
    // querySnapshot.docs.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.get('word')}`);
    // });
  }
}
