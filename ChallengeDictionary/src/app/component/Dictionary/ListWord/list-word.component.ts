import { Component, OnInit} from '@angular/core';

// APP
import { listWord } from 'app/services/DictionaryAPI/Types/wordResume';

@Component({
  selector: 'component-list-word',
  templateUrl: './list-word.component.html',
  styleUrls: ['./list-word.component.scss']
})
export class ListWordComponent implements OnInit {

  public listWords: listWord[] = [];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  ngOnInit(): void {
    this.readWords();
  }

  private readWords(): void {
    this.listWords = JSON.parse(localStorage.getItem("words"));
    // this._wordsService.getDatas('allWords').then(test => {
    //   test.docs.forEach((doc) => {
    //     this.listWords.push({ id: parseInt(doc.id), word: doc.get('word') });
    //   });
    // });
  }
}
