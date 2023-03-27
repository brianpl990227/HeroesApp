import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {



  constructor(private http: HttpClient) { }


  getHeroes(): Observable<Heroe[]>
  {
    return this.http.get<Heroe[]>(`${environment.apiUrl}heroes`)
  }

  getHeroeById(id: string): Observable<Heroe>
  {
    return this.http.get<Heroe>(`${environment.apiUrl}${id}`)
  }

}
