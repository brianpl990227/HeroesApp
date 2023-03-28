import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {


  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}heroes`)
  }

  getHeroeById(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.baseUrl}heroes/${id}`)
  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    const params  = new HttpParams().set('q', termino).set('_limit',6)

    return this.http.get<Heroe[]>(this.baseUrl+'heroes/',{params});

  }

}
