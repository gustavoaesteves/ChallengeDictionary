import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

// App
import { DictionaryAPIService } from 'app/services/DictionaryAPI/dictionaryAPI.service';
import { listWord, WordResume } from 'app/services/DictionaryAPI/Types/wordResume';

@Component({
  selector: 'component-details-word',
  templateUrl: './details-word.component.html',
  styleUrls: ['./details-word.component.scss']
})
export class DetailsWordComponent implements OnChanges {

  @Input() listWords: listWord[];

  private indexWordSelect: number = 0;

  public wordSelect: WordResume;

  constructor(private _apiDictionary: DictionaryAPIService,) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.listWords);

    console.log(changes);

    if(this.listWords !== changes["listWords"].currentValue){
      this.listWords = changes['listWords'].currentValue;
      console.log(this.listWords);
      this.getWordAPI();
    }
  }

  private getWordAPI(): void {
    this._apiDictionary.getWordAPI('hello').subscribe(wordDetails => {
      console.log(wordDetails);
    });
  }

}
