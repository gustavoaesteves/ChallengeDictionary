import { Component, OnInit } from '@angular/core';

// APP
import { listWord } from 'app/services/Firebase/Words/Types/wordResume';

@Component({
  selector: 'component-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  public favoritesWords: listWord[] = [];

  private listWords: listWord[] = [];
  private favorite: number[] = [];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  ngOnInit(): void {
    this.readWords();
  }

  private readWords(): void {
    this.listWords = JSON.parse(localStorage.getItem("words"));

    this.favorite = JSON.parse(localStorage.getItem("favorite"));

    this.favoritesWords = this.listWords.filter(word => this.favorite.includes(word.id));

    console.log(this.favoritesWords);
  }
}
