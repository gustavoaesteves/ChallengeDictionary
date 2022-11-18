import { Component, OnInit } from '@angular/core';

// APP
import { listWord } from 'app/services/DictionaryAPI/Types/wordResume';
import { WordsService } from 'app/services/Firebase/Words/Words.service';

@Component({
  selector: 'component-list-word',
  templateUrl: './list-word.component.html',
  styleUrls: ['./list-word.component.scss']
})
export class ListWordComponent implements OnInit {

  public listWords: listWord[] = [];

  constructor(private _wordsService: WordsService,) { }

  ngOnInit(): void {
    this.readWords();
  }

  private readWords(): void {
    this._wordsService.getDatas().then(test => {
      test.docs.forEach((doc) => {
        this.listWords.push({ id: parseInt(doc.id), word: doc.get('word') });
      });
      console.log(this.listWords);
    });
  }

}
