import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams().set('fields','name,capital,population,flags,cca2,');
  }

  constructor( private http: HttpClient) { }


  buscarPais (termino: string): Observable<Country[]> {    
    const url = `${ this.apiURL }/name/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
            // .pipe(
            //   catchError( err => of([]))
            // );
  }

  buscarCapital (termino: string): Observable<Country[]> {
    const url = `${ this.apiURL }/capital/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
            // .pipe(
            //   catchError( err => of([]))
            // );
  }

  buscarPaisxId (termino: string): Observable<Country[]> {
    const url = `${ this.apiURL }/alpha/${ termino }`;
    return this.http.get<Country[]>( url );

  }

  buscarRegion (termino: string): Observable<Country[]> {

    const url = `${ this.apiURL }/region/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } )

  }

}
