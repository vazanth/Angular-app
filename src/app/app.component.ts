import { Component } from '@angular/core';
import {MediaSearchService} from './media-search/media-search.service';
import {MediaDetailService} from './media-detail/media-detail.service';


@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  // template: '<div> <h1>{{title}}</h1> <pm-landing></pm-landing> </div>'
 // styleUrls: ['./app.component.css']
  providers: [MediaSearchService, MediaDetailService]
})
export class AppComponent {
  title: string = 'Movie Series Management';
}




