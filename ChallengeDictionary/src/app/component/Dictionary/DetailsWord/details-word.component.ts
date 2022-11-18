import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

// App
import { DictionaryAPIService } from 'app/services/DictionaryAPI/dictionaryAPI.service';
import { listWord, meaningsDefinitions, WordResume } from 'app/services/DictionaryAPI/Types/wordResume';

@Component({
  selector: 'component-details-word',
  templateUrl: './details-word.component.html',
  styleUrls: ['./details-word.component.scss']
})
export class DetailsWordComponent implements OnChanges {

  @Input() listWords: listWord[];
  @Input() idWord: number;

  private indexWordSelect: number = 0;

  private ringer = new Audio();

  public wordSelect: WordResume[] = [];
  public wordMeanings: meaningsDefinitions[] = [];

  constructor(private _apiDictionary: DictionaryAPIService,) { }

  ngOnChanges(changes: SimpleChanges): void {
    // eslint-disable-next-line no-empty
    if (changes.listWords && changes.listWords.currentValue) {
    }
    if (changes.idWord && changes.idWord.currentValue) {
      this.indexWordSelect = changes.idWord.currentValue;
    }
    this.getWordAPI();
  }

  private getWordAPI(): void {
    if (this.listWords.length < 1) return;
    this.ringer = new Audio();
    this.wordMeanings = [];

    this._apiDictionary.getWordAPI(this.listWords[this.indexWordSelect].word).subscribe(wordDetails => {

      this.wordSelect = wordDetails;

      // console.log(wordDetails);
      wordDetails.map(detail => {
        this.wordMeanings.push(detail.meanings);

        if (this.ringer.src === '')
          detail.phonetics.map(phone => {
            if (phone.audio) {
              this.ringer.src = phone.audio;
            }
          });
      });

      this.wordMeanings = this.wordMeanings.slice();
    });
  }

  public next(): void {
    this.indexWordSelect += 1;
    if (this.indexWordSelect === this.listWords.length) this.indexWordSelect = 0;
    this.getWordAPI();
  }

  public previous(): void {
    this.indexWordSelect -= 1;
    if (this.indexWordSelect === -1) this.indexWordSelect = this.listWords.length - 1;
    this.getWordAPI();
  }

  public playSound(): void {
    this.ringer.muted = false;
    this.ringer.load();
    this.ringer.play();
  }
}
