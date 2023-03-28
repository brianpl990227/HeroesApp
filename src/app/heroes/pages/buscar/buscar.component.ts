import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../service/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  termino: string = ''
  heroes: Heroe[] = []
  heroeSeleccionado: Heroe | undefined;


  constructor(private heroesService: HeroesService) { }

  buscar() {
    this.heroesService.getSugerencias(this.termino.trim()).subscribe(heroes => this.heroes = heroes)
  }

  opcionSeleccionada(evento: MatAutocompleteSelectedEvent) {


    if(!evento.option.value)
    {
      this.heroeSeleccionado = undefined
      return;
    }

    const heroe: Heroe = evento.option.value

    this.termino = heroe.superhero

    this.heroesService.getHeroeById(heroe.id!).subscribe(response => this.heroeSeleccionado = response)

  }

}
