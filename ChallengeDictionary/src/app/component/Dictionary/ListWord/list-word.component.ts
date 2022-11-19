import { Component, OnInit} from '@angular/core';

// APP
import { listWord } from 'app/services/Firebase/Words/Types/wordResume';

@Component({
  selector: 'component-list-word',
  templateUrl: './list-word.component.html',
  styleUrls: ['./list-word.component.scss']
})
export class ListWordComponent implements OnInit {

  public listWords: listWord[] = [];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  ngOnInit(): void {
    this.readWords();
  }

  private readWords(): void {
    this.listWords = JSON.parse(localStorage.getItem("words"));
  }
}
