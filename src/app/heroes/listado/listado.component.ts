import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {

    public heroes: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Thor', 'capitan America'];
    public heroesEliminados: string[] = [];

    borrar(){
      let heroeEliminado: string | undefined = this.heroes.shift();
      
      typeof heroeEliminado === 'string' ? this.heroesEliminados.push(heroeEliminado) :
      console.log('No hay datos para eliminar');
    }
}
