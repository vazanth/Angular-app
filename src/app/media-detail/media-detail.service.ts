import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ILanding} from '../media-search/media-search';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MediaDetailService {
  private _httpurl= 'api/details/details.json';

  constructor(private _http: HttpClient) {}

  getValue(): Observable<ILanding[]> {
    return this._http.get<ILanding[]>(this._httpurl);
  }
}
