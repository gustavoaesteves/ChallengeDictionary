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

  private indexWordSelect: number = 0;

  public wordSelect: WordResume[] = [];
  public wordMeanings: meaningsDefinitions[] = [];

  constructor(private _apiDictionary: DictionaryAPIService,) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.listWords && changes.listWords.currentValue){
      this.getWordAPI();
    }
  }

  private getWordAPI(): void {
    // this.listWords[this.indexWordSelect].word
    if(this.listWords.length < 1) return;
    this._apiDictionary.getWordAPI('a').subscribe(wordDetails => {
      this.wordSelect = wordDetails;
      wordDetails.map(detail => {
        // console.log(detail);
        this.wordMeanings.push(detail.meanings);
        // detail.map(meaning => {
        //   this.wordMeanings.push(meaning);
        // });
      });
      // console.log(wordDetails);
      // console.log(this.wordMeanings);
    });
  }

}
