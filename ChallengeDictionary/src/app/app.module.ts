import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MAT_AUTOCOMPLETE_SCROLL_STRATEGY
} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
