import { Component, OnInit} from '@angular/core';
import { UsersService } from 'app/services/Firebase/Users/Users.service';

// APP
import { listWord } from 'app/services/Firebase/Words/Types/wordResume';

@Component({
  selector: 'component-list-word',
  templateUrl: './list-word.component.html',
  styleUrls: ['./list-word.component.scss']
})
export class ListWordComponent implements OnInit {

  public listWords: listWord[] = [];

  public favorite: number[] = [];
  public historic: number[] = [];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private _usersService: UsersService,) {}

  ngOnInit(): void {
    this.readWords();

    // Saved localStorage
    const saved = JSON.parse(localStorage.getItem("favorite"));
    if (saved === null) this.userSaved();
  }

  private readWords(): void {
    this.listWords = JSON.parse(localStorage.getItem("words"));
  }

  private userSaved(): void {
    this._usersService.getUsers().then((test) => {
      test.docs.forEach((doc) => {
        if (doc.get('favorite').length > 0) doc.get('favorite').map(id => this.favorite.push(id));
        if (doc.get('historic').length > 0) doc.get('historic').map(id => this.historic.push(id));
      });

    }).catch(err => { console.log(err); })
      .finally(() => {
        this.historic = [... new Set(this.historic)];
        localStorage.setItem('favorite', JSON.stringify(this.favorite));
        localStorage.setItem('historic', JSON.stringify(this.historic));
        console.log('Saved favorite and historic localStorage');
      });
  }
}
