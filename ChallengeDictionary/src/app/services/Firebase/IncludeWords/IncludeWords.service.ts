/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';

import { collection, getDocs, doc, setDoc } from 'firebase/firestore/lite';

@Injectable({
  providedIn: 'root'
})
export class IncludeWordsService {

  constructor() { }

  public async setDatas(db, word: string, id: number): Promise<void> {

    const special1 = doc(db,'allWords', `${id}`);
    await setDoc(special1, {
      word: word,
    },
    {
      merge: true
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getDatas(db): Promise<any> {
    const querySnapshot = await getDocs(collection(db, "allWords"));
    querySnapshot.docs.forEach((doc) => {
      console.log(`${doc.id} => ${doc.get('word')}`);
    });
  }
}
