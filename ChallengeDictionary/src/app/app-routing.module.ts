import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './page/Login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login',},
  { path: 'login', component: LoginPageComponent },
  /*{ path: 'Irep', component: HomeComponent,
    children: [
      { path: 'dashboard', component: AdvertsPageComponent },
      { path: 'announce', component: AnnouncePageComponent },
      { path: 'favorites', component: FavoritesPageComponent },
      { path: 'description/:advert', component: DescriptionPageComponent },
    ]
  },*/
  { path: '**', redirectTo: 'login',},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
