import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient) { }


  buscarPais (termino: string): Observable<Country[]> {    
    const url = `${ this.apiURL }/name/${ termino }`;
    return this.http.get<Country[]>( url );
            // .pipe(
            //   catchError( err => of([]))
            // );
  }

  buscarCapital (termino: string): Observable<Country[]> {
    const url = `${ this.apiURL }/capital/${ termino }`;
    return this.http.get<Country[]>( url );
            // .pipe(
            //   catchError( err => of([]))
            // );
  }

  buscarPaisxId (termino: string): Observable<Country[]> {
    const url = `${ this.apiURL }/alpha/${ termino }`;
    return this.http.get<Country[]>( url );

  }

}
