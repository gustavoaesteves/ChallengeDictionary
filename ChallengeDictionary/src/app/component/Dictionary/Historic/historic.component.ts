import { Component, OnInit } from '@angular/core';

// APP
import { listWord } from 'app/services/Firebase/Words/Types/wordResume';

@Component({
  selector: 'component-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss']
})
export class HistoricComponent implements OnInit {

  public historicsWords: listWord[] = [];

  private listWords: listWord[] = [];
  private historic: number[] = [];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  ngOnInit(): void {
    this.readWords();
  }

  private readWords(): void {
    this.listWords = JSON.parse(localStorage.getItem("words"));

    this.historic = JSON.parse(localStorage.getItem("historic"));

    this.historicsWords = this.listWords.filter(word => this.historic.includes(word.id));
  }

}
