import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {StarComponent} from './star.component';
import {RatingPipe} from './rating.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [ StarComponent,
    RatingPipe],
  exports: [
     StarComponent,
      RatingPipe
  ]
})
export class SharedModule {

}
