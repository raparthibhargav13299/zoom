import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from "rxjs/operators";
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphQueryService {

  constructor(private httpClient: HttpClient) { }

  public getAllProgramDetails() {
    return this.httpClient.get<any>("http://localhost:3000/programs")
      .pipe(catchError(this.errorHandler));
  }

  public getProgramTitles() {
    return this.httpClient.get<any>("http://localhost:3000/content")
      .pipe(catchError(this.errorHandler));
  }

  public errorHandler(error: Response | any) {
    if (error instanceof ErrorEvent) {
      console.error("an error occured:", error.message);
      return throwError("something bad happened");
    }
    else {
      console.error(`backend returned code ${error.status},` +
        `body was:${error.message}`);
      return throwError(error);
    }
  }
}
