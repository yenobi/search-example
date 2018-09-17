import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';
import { Observable, of } from 'rxjs';

const apiEndpoints = {
  getJokesFor: (query) => (`/jokes/search?query=${query}`)
};

@Injectable()
export class FfTestPageService {

  constructor(
    private _http: HttpClient
  ) { }

  public searchJokes(query: string): Observable<any> {
   return this._http
     .get(
       apiEndpoints.getJokesFor(query)
     )
     .pipe(
       catchError(() => of('Error, could not load joke'))
     );
  }
}
