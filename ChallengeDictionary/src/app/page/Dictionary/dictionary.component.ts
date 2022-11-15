import { Component, OnInit } from '@angular/core';

// import { readFileSync} from 'fs'

@Component({
  selector: 'page-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const reader = new FileReader();

    // reader.readAsText(Blob,'../../utils/Words/english.txt');

    // const fileWords = readFileSync('../../utils/Words/english.txt');
    // console.log(fileWords);
    // console.log(fileWords);

  }

}
