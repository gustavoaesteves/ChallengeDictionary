import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '@firebase/util';

@Injectable({
  providedIn: 'root'
})
export class DictionaryAPIService {

constructor(private _http: HttpClient) { }

public getWordAPI(word: string): any {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return this._http.get<any>(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
}

}
