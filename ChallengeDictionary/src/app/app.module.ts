import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule
} from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsWordComponent } from './component/Dictionary/DetailsWord/details-word.component';
import { FavoritesComponent } from './component/Dictionary/favorites/favorites.component';
import { ListWordComponent } from './component/Dictionary/ListWord/list-word.component';
import { FormsLoginComponent } from './component/Login/FormsLogin/formsLogin.component';
import { DictionaryPageComponent } from './page/Dictionary/dictionary.component';
import { LoginPageComponent } from './page/Login/login.component';
@NgModule({
  declarations: [
    AppComponent,

    // Pages
    LoginPageComponent,
    DictionaryPageComponent,

    // Components
    FormsLoginComponent,
    DetailsWordComponent,
    ListWordComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatIconModule,
    HttpClientModule,

    // Firebase
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
