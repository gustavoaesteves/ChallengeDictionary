import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// App
import { DictionaryAPIService } from 'app/services/DictionaryAPI/dictionaryAPI.service';
import { listWord, meaningsDefinitions, WordResume } from 'app/services/Firebase/Words/Types/wordResume';
import { UsersService } from 'app/services/Firebase/Users/Users.service';

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
  public favorite: number[] = [];
  public historic: number[] = [];

  // Words
  public listWords: listWord[] = [];

  // Words get API
  public wordSelect: WordResume[] = [];
  public wordMeanings: meaningsDefinitions[] = [];

  constructor(
    private _apiDictionary: DictionaryAPIService,
    private _route: ActivatedRoute,
    private _location: Location,
    private _usersService: UsersService,
  ) {
    this.user = localStorage.getItem('user');
  }

  ngOnInit(): void {
    // Saved localStorage
    const saved = JSON.parse(localStorage.getItem("favorite"));
    if (saved === null) this.userSaved();
    else { this.getFavorite(); this.getHistoric(); }

    // Get words localstorage
    this.listWords = JSON.parse(localStorage.getItem("words"));

    //Get word in URL
    this._route.params.subscribe((g) => {
      if (g) this.getWordAPI(g.word);
      this.indexWordSelect = this.listWords.findIndex(obj => obj.word == g.word);
    });
  }

  private userSaved(): void {
    this._usersService.getUsers().then((test) => {
      test.docs.forEach((doc) => {
        if(doc.get('favorite').length > 0) doc.get('favorite').map(id => this.favorite.push(id));
        if(doc.get('historic').length > 0) doc.get('historic').map(id => this.historic.push(id));
      });

    }).catch(err => { console.log(err); })
      .finally(() => {
        localStorage.setItem('favorite', JSON.stringify(this.favorite));
        localStorage.setItem('historic', JSON.stringify(this.historic));
        console.log('Saved favorite and historic localStorage');
      });
  }

  private getFavorite(): void {
    this.favorite = JSON.parse(localStorage.getItem("favorite"));
  }

  private getHistoric(): void {
    this.historic = JSON.parse(localStorage.getItem("historic"));
  }

  private getWordAPI(word: string): void {
    this._location.replaceState("/dictionary/details/" + word);
    this.ringer = new Audio();
    this.wordMeanings = [];

    this._apiDictionary.getWordAPI(word).subscribe(wordDetails => {

      this.wordSelect = wordDetails;

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

  public saveFavorite(word: string): void {
    const idFavorite = this.listWords[this.listWords.findIndex(obj => obj.word == word)].id;
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite && !this.favorite.includes(idFavorite)) {
      this.favorite.push(idFavorite);
    } else {
      this.favorite = this.favorite.filter(v => v !== idFavorite);
    }
    localStorage.setItem('favorite', JSON.stringify(this.favorite));
    this._usersService.setUser(this.user, this.favorite, this.historic);
  }

  public checkFavorite(word: string): boolean {
    const checkFavorite = this.listWords[this.listWords.findIndex(obj => obj.word == word)].id;
    return this.favorite.includes(checkFavorite);
  }
}
