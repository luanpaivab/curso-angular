import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals: Animal[] = [];

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  animal: Animal = {
    nome: 'teste',
    tipo: 'doguíneo',
    idade: 7,
  };

  animalDetails = '';
  showIdade(animal: Animal) {
    this.animalDetails = `O pet ${animal.nome} tem ${animal.idade} anos`;
  }

  removeAnimal(animal: Animal) {
    console.log('removendo animal...');
    this.animals = this.listService.remove(this.animals, animal);
  }

  //Qdo o evento é observável, precisa usar o subscribe que diz que o evento vai ser concretizado
  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
