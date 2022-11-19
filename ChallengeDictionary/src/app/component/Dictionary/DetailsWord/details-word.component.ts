import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

// App
import { DictionaryAPIService } from 'app/services/DictionaryAPI/dictionaryAPI.service';
import { listWord, meaningsDefinitions, WordResume } from 'app/services/DictionaryAPI/Types/wordResume';

@Component({
  selector: 'component-details-word',
  templateUrl: './details-word.component.html',
  styleUrls: ['./details-word.component.scss']
})
export class DetailsWordComponent implements OnInit {

  // Next and previous
  private indexWordSelect: number = 0;

  // Sound word
  private ringer = new Audio();

  // User login
  private user: string = '';

  // Check favorite
  public isFavorite: boolean = false;

  public listWords: listWord[] = [];

  // Words get API
  public wordSelect: WordResume[] = [];
  public wordMeanings: meaningsDefinitions[] = [];

  constructor(
    private _apiDictionary: DictionaryAPIService,
    private _route: ActivatedRoute,
    private location: Location,
    ) {
    this.user = localStorage.getItem('user');
  }

  ngOnInit(): void {
    this.listWords = JSON.parse(localStorage.getItem("words"));

    this._route.params.subscribe((g) => {
      if(g) this.getWordAPI(g.word);
      this.indexWordSelect = this.listWords.findIndex(obj => obj.word==g.word);
    });
  }

  private getWordAPI(word: string): void {
    this.location.replaceState("/dictionary/details/" + word);
    this.ringer = new Audio();
    this.wordMeanings = [];

    this._apiDictionary.getWordAPI(word).subscribe(wordDetails => {

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
    this.getWordAPI(this.listWords[this.indexWordSelect].word);
  }

  public previous(): void {
    this.indexWordSelect -= 1;
    if (this.indexWordSelect === -1) this.indexWordSelect = this.listWords.length - 1;
    this.getWordAPI(this.listWords[this.indexWordSelect].word);
  }

  public playSound(): void {
    this.ringer.muted = false;
    this.ringer.load();
    this.ringer.play();
  }

  public saveFavorite(): void {
    this.isFavorite = true;
  }
}
