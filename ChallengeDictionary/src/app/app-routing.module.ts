import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsWordComponent } from './component/Dictionary/DetailsWord/details-word.component';
import { FavoritesComponent } from './component/Dictionary/favorites/favorites.component';
import { ListWordComponent } from './component/Dictionary/ListWord/list-word.component';
import { DictionaryPageComponent } from './page/Dictionary/dictionary.component';
import { LoginPageComponent } from './page/Login/login.component';
import { RegisterPageComponent } from './page/Register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login',},
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'dictionary', component: DictionaryPageComponent,
    children: [
      { path: 'details/:word', component: DetailsWordComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'list', component: ListWordComponent },
    ]
  },
  { path: '**', redirectTo: 'login',},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
