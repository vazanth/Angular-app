import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MediaDetailComponent} from './media-detail.component';
import {MediaDetailService} from './media-detail.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    MediaDetailComponent,
  ],
  providers: [MediaDetailService]
})
export class MediaDetailModule { }
