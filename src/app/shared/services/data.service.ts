import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';

import { productConfig, productInfo } from '../mock/landing-mock';
import { ErrorHandler } from '../classes';

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
    const requestUrl = this.siteUrl + 'info' + productId;

    return of(null).pipe(
      map(() => {
        return {
          status: 'SUCCESS',
          data: productInfo
        };
      }),
      delay(1000),
      catchError(error => this.handleStatusErrors(error))
    );

    // return this.http.get(requestUrl).pipe(
    //   catchError(error => {
    //     return this.handleStatusErrors(error);
    //   })
    // );
  }

  getProductConfig(): Observable<any> {
    const requestUrl = this.siteUrl + 'config';

    return of(null).pipe(
      map(() => {
        return {
          status: 'SUCCESS',
          data: productConfig
        };
      }),
      delay(1000),
      catchError(error => this.handleStatusErrors(error))
    );

    // return this.http.get(requestUrl).pipe(
    //   catchError(error => {
    //     return this.handleStatusErrors(error);
    //   })
    // );
  }
}
