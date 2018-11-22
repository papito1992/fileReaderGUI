import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormUpComponent} from './upload/form-up/form-up.component';
import {ListUpComponent} from './upload/list-up/list-up.component';
import {DetailsUpComponent} from './upload/details-up/details-up.component';
import {HttpClientModule} from '@angular/common/http';
import {ResultsComponent} from './results/results.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FormUpComponent,
    ListUpComponent,
    DetailsUpComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
