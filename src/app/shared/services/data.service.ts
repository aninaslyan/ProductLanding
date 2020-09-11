import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { ErrorHandler } from '../classes';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class DataService extends ErrorHandler {
  siteUrl: string;

  constructor(
    private http: HttpClient,
    public router: Router
  ) {
    super(router);
    this.siteUrl = '';
  }

  getProductInfo(productId: number): Observable<any> {
    const requestUrl = this.siteUrl;

    return this.http.get(requestUrl).pipe(
      catchError(error => {
        return this.handleStatusErrors(error);
      })
    );
  }
}
