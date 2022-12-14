import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// App
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsWordComponent } from './component/Dictionary/DetailsWord/details-word.component';
import { FavoritesComponent } from './component/Dictionary/favorites/favorites.component';
import { HistoricComponent } from './component/Dictionary/Historic/historic.component';
import { ListWordComponent } from './component/Dictionary/ListWord/list-word.component';
import { TableMeaningsComponent } from './component/Dictionary/TableMeanings/table-meanings.component';
import { FormsLoginComponent } from './component/Login/formsLogin.component';
import { FormsRegisterComponent } from './component/Register/forms-register.component';
import { requestInterceptor } from './Interceptors/request.interceptor';
import { DictionaryPageComponent } from './page/Dictionary/dictionary.component';
import { LoginPageComponent } from './page/Login/login.component';
import { RegisterPageComponent } from './page/Register/register.component';
@NgModule({
  declarations: [
    AppComponent,

    // Pages
    LoginPageComponent,
    DictionaryPageComponent,
    RegisterPageComponent,

    // Components
    FormsLoginComponent,
    DetailsWordComponent,
    ListWordComponent,
    FavoritesComponent,
    TableMeaningsComponent,
    FormsRegisterComponent,
    HistoricComponent,
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
    MatTooltipModule,
    MatTableModule,
    MatProgressSpinnerModule,
    HttpClientModule,

    ToastrModule.forRoot(),

    // Firebase
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: requestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
