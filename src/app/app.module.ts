import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {WelcomeComponent} from './home/welcome.component';
import { MediaDetailModule } from './media-detail/media-detail.module';
import {MediaSearchModule} from './media-search/media-search.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: WelcomeComponent},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    MediaDetailModule,
    MediaSearchModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
