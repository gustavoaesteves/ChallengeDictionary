/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';

// APP
import { listWord } from 'app/services/Firebase/Words/Types/wordResume';
import { WordsService } from 'app/services/Firebase/Words/Words.service';

@Component({
  selector: 'page-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryPageComponent implements OnInit {

  // All words save in Firebase
  public allWords: listWord[] = [];

  // Check Saved words
  public savedLocal: boolean = false;

  public listWords = ["a", "a-", "a2 level", "a3", "a4", "a5", "aaa", "aaas", "aad", "aadhaar",
    "aam", "a — and a half", "aapa", "aardwolf", "aargh", "aaronic", "aaron's beard", "aaron's rod",
    "aarp", "a'asia", "aasvoel", "aau", "aaup", "ab", "ab-", "aba", "a bad apple", "a bad lot",
    "a bad penny always turns up", "a bad taste in someone's mouth", "a bad workman always blames his tools",
    "a bag of bones", "a bag of tricks", "abaht", "abandon", "abandoned", "abandonment", "abandon ship", "abandonware",
    "a barrel of laughs", "abase", "abasement", "abashed", "abate", "abatement", "abatis", "abattoir",
    "a battuta", "abaxial", "abaya", "abbacy", "abbasid", "abbatial", "abbevillian", "abbey", "abbreviate",
    "abbreviated", "abbreviation", "abd", "abdabs", "abdicate", "abdication", "abdomen", "abdominal", "abdominoplasty",
    "abdominous", "abducens", "abducens nerve", "abduct", "abductee", "abductor", "abeam", "a beam in one's eye",
    "a bed of roses", "abeer", "abele", "abelia", "abelian", "abenomics", "aberdeen angus", "aberdonian", "aberrant",
    "aberration", "abet", "a better mousetrap", "abeyance", "abh", "abhinaya", "abhor", "abhorrence", "abhorrent", "abide",
    "abiding", "abigail", "a big deal", "a big fish", "a big fish in a small pond", "ability", "ab initio", "abiogenesis",
    "abiotic", "a bird in the hand is worth two in the bush", "a bit", "a bite at the cherry", "a bit much", "a bit of a —",
    "a bit of all right", "a bitter pill to swallow", "a bit thick", "abitur", "abject", "abjure", "abjure the realm", "abkhaz",
    "abkhazian", "a blast from the past", "ablative", "ablative absolute", "ablaut", "ablaze", "able", "able-bodied", "able-bodied seaman",
    "abled", "ableism", "able seaman", "a blessing in disguise", "a blot on one's escutcheon", "ablush", "abnaki", "abnegate", "abnegation",
    "abney level", "abnormal", "abnormality", "abnormity", "åbo", "abo", "abode", "a bold stroke", "abolish", "abolition", "a bolt from the blue",
    "abomasum", "abominable", "abominable snowman", "abominably", "abominate", "abomination", "aboral", "aboriginal",
    "aboriginality", "aboriginalization"];

  constructor(
    private _wordsService: WordsService
  ) {
    const words = JSON.parse(localStorage.getItem("words"));
    if (!words) {
      this._wordsService.getDatas('allWords').then((test) => {
        test.docs.forEach((doc) => {
          this.allWords.push({ id: parseInt(doc.id), word: doc.get('word') });
        });

      }).catch(err => { console.log(err); })
        .finally(() => {
          localStorage.setItem('words', JSON.stringify(this.allWords));
          console.log('Saved words localStorage');
          this.savedLocal = true;
        });
    } else { this.savedLocal = true;}
  }

  ngOnInit(): void {
  }
}
