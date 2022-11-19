import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// App
import { AuthService } from 'app/services/Firebase/Auth/auth.service';

@Component({
  selector: 'component-login-forms',
  templateUrl: './formsLogin.component.html',
  styleUrls: ['./formsLogin.component.scss']
})
export class FormsLoginComponent implements OnInit {

  // eslint-disable-next-line max-len
  words = ["a", "a-", "a2 level", "a3", "a4", "a5", "aaa", "aaas", "aad", "aadhaar", "aam", "a — and a half", "aapa", "aardwolf", "aargh", "aaronic", "aaron's beard", "aaron's rod", "aarp", "a'asia", "aasvoel", "aau", "aaup", "ab", "ab-", "aba", "a bad apple", "a bad lot", "a bad penny always turns up", "a bad taste in someone's mouth", "a bad workman always blames his tools", "a bag of bones", "a bag of tricks", "abaht", "abandon", "abandoned", "abandonment", "abandon ship", "abandonware", "a barrel of laughs", "abase", "abasement", "abashed", "abate", "abatement", "abatis", "abattoir", "a battuta", "abaxial", "abaya", "abbacy", "abbasid", "abbatial", "abbevillian", "abbey", "abbreviate", "abbreviated", "abbreviation", "abd", "abdabs", "abdicate", "abdication", "abdomen", "abdominal", "abdominoplasty", "abdominous", "abducens", "abducens nerve", "abduct", "abductee", "abductor", "abeam", "a beam in one's eye", "a bed of roses", "abeer", "abele", "abelia", "abelian", "abenomics", "aberdeen angus", "aberdonian", "aberrant", "aberration", "abet", "a better mousetrap", "abeyance", "abh", "abhinaya", "abhor", "abhorrence", "abhorrent", "abide", "abiding", "abigail", "a big deal", "a big fish", "a big fish in a small pond", "ability", "ab initio", "abiogenesis"];

  public loginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required]]
    });

    // Set all Words in Firebase - Saved 100 words limit firebase no cost
    // const teste = ["a", "a-"];
    // teste.map((word, index) => {
    //   this._wordsService.setDatas(this.db, word, index).then(() => console.log('Salva'));
    // });
  }

  connectUser(): void {
    if (this.loginForm.invalid || this.loginForm === null) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const login = {
      email: this.loginForm.get('email').value,
      pass: this.loginForm.get('pass').value,
    };

    // Login User
    this._auth.login(login);
  }
}
