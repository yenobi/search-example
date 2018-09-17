import { Component, OnInit } from '@angular/core';
import {FfTestPageService} from '@app/ff-test-page/ff-test-page.service';
import {Joke} from '@app/ff-test-page/ff-test-page.models';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-ff-test-page',
  templateUrl: './ff-test-page.component.html',
  styleUrls: ['./ff-test-page.component.scss']
})
export class FfTestPageComponent implements OnInit {
  public search = '';
  public isLoading = false;
  public result$: Observable<Joke>;

  constructor(
    private _ff: FfTestPageService
  ) { }

  ngOnInit() {
  }

  public submitSearch() {
    this._toggleLoading();
    this.result$ = this._ff
      .searchJokes(this.search)
      .pipe(
        tap((res) => {
          this._toggleLoading();
          return res;
        }),
        map(({ result, total }) => (result)),
      );
  }

  private _toggleLoading() {
    this.isLoading = !this.isLoading;
  }

}
