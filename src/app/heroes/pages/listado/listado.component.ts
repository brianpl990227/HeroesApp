import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../service/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  
  heroes: Heroe[] = []

  constructor(private heroesService: HeroesService){}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(response => {
      this.heroes = response
    })
  }


}
