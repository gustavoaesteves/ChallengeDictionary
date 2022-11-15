import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatAutocompleteModule,
  MAT_AUTOCOMPLETE_SCROLL_STRATEGY
} from '@angular/material/autocomplete';
import { LoginPageComponent } from './page/Login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsLoginComponent } from './component/Login/FormsLogin/formsLogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    // Pages
    LoginPageComponent,

    // Components
    FormsLoginComponent
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
