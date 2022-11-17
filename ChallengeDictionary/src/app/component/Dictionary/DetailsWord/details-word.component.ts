import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DictionaryAPIService } from 'app/services/DictionaryAPI/dictionaryAPI.service';

@Component({
  selector: 'component-details-word',
  templateUrl: './details-word.component.html',
  styleUrls: ['./details-word.component.scss']
})
export class DetailsWordComponent implements OnChanges {

  @Input() words: string[];

  public wordSelect: any;

  constructor(private _apiDictionary: DictionaryAPIService) { }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {
    this.getWordAPI();
  }

  private getWordAPI(): void {
    this._apiDictionary.getWordAPI('hello').subscribe( wordDetails => {
      console.log(wordDetails);
    });
  }

}
