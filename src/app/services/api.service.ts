import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    protected http: HttpClient

  ) { }

  getAll(url: String): Observable <any[]> {
    this.consoleService(`called getAll: ${environment.apiUrl}${url}`);

    return this.http.get(`${ environment.apiUrl }${ url }`).pipe(
        map(response => response as any[])

    );
  }

  getSome(url: String, id: Number): Observable<any[]> {
    this.consoleService(`called getSome: ${environment.apiUrl}${url}${id}`);

    return this.http.get(`${environment.apiUrl}${url}${id}`).pipe(
      map(response => response as any[])
    );
  }

  getOne(url: String, id: Number): Observable<any> {
    this.consoleService(`called getOne: ${environment.apiUrl}${url}${id}`);
    
    return this.http.get(`${environment.apiUrl}${url}${id}`).pipe(
      map(response => response as any)
    );
  }

  create(url: string, resource: Object = {}, options?):Observable<any> {
    return this.http.post(`${environment.apiUrl}${url}`, JSON.stringify(resource), options).pipe(
      map(response => response as any)
    );
  }


  consoleService(message: String): void {
    console.log(message);
  }


}
