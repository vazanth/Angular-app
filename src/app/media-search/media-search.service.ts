import {Injectable} from '@angular/core';
import {ILanding} from './media-search';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MediaSearchService {
  private _httpurl = 'api/details/details.json';
  constructor(private _http: HttpClient) {
  }
    getDetails(): Observable<ILanding[]> {
    return this._http.get<ILanding[]>(this._httpurl);
  }
}
