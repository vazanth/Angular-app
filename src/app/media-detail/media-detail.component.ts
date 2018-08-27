import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ILanding} from '../media-search/media-search';
import {MediaDetailService} from './media-detail.service';

@Component({
  // selector: 'pm-media-detail',
  templateUrl: './media-detail.component.html',
  styleUrls: ['./media-detail.component.css']
})
export class MediaDetailComponent implements OnInit {
  pageTitle: string= 'Media Detail:';
  errorMessage: string;
  detail: ILanding[];
  constructor(private _Aroute: ActivatedRoute, private _MDService: MediaDetailService, private _router: Router) { }

  ngOnInit() {
    /*let id = +this._Aroute.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.detail =  [{
      "MediaID":id,
      "Name": "Star Wars: The Empire Strikes Back",
      "Genere": "Sci-Fi",
      "MovieorSeries": "Movie",
      "Rating": 9,
      "imageurl": "https://vignette.wikia.nocookie.net/starwars/images/7/7b/TESBHardcover.png/revision/latest?cb=20150508103704"
    }]*/

      this._MDService.getValue().subscribe(
        detail => this.detail = detail,
        error => this.errorMessage = <any>error
      );
  }

  Back(): void {
    this._router.navigate(['/search']);
  }
}
