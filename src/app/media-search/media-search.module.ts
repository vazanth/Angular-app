import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StarComponent} from '../shared/star.component';
import {MediaSearchComponent} from './media-search.component';
import {RatingPipe} from '../shared/rating.pipe';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MediaDetaiGuardService} from '../media-detail/media-detai-guard.service';
import {MediaDetailComponent} from '../media-detail/media-detail.component';
import {MediaSearchService} from './media-search.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'search', component: MediaSearchComponent},
      {path: 'search/:id', canActivate: [MediaDetaiGuardService], component: MediaDetailComponent},
    ]),
    SharedModule,
  ],
  declarations: [
    MediaSearchComponent,
   // StarComponent,
   // RatingPipe
  ],
  providers: [MediaDetaiGuardService, MediaSearchService]
})
export class MediaSearchModule { }
