import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import{IEmployee} from './employee';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string ="/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<IEmployee[]>{       
    return  this.http.get<IEmployee[]>(this._url); 
  }
  
}
