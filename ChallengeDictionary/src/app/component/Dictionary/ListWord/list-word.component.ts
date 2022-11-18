import { Component, OnInit } from '@angular/core';

// APP
import { WordsService } from 'app/services/Firebase/Words/Words.service';

@Component({
  selector: 'component-list-word',
  templateUrl: './list-word.component.html',
  styleUrls: ['./list-word.component.scss']
})
export class ListWordComponent implements OnInit {

  constructor(private _wordsService: WordsService,) { }

  ngOnInit(): void {
    this.readWords();
  }

  private readWords(): void {
    this._wordsService.getDatas().then(test => {
        test.docs.forEach((doc) => {
          console.log(`${doc.id} => ${doc.get('word')}`);
        });
      });
  }
}
