import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  constructor(public httpClient: HttpClient) { }

  getProducts(): Observable<any> {
    return this.httpClient.get(`${environment.ApiURL}`).pipe(
      catchError(this.handleHttpError)
    );
  }

  private handleHttpError(error: HttpErrorResponse) {
    return throwError(() => error);
  }

}
