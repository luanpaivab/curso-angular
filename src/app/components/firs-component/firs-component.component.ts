import { Component } from '@angular/core';

@Component({
  selector: 'app-firs-component',
  templateUrl: './firs-component.component.html',
  styleUrls: ['./firs-component.component.css']
})
export class FirsComponentComponent {
  nome: string = 'Luan'
  idade: number = 29
  job = 'Progrmador'
  hobbes = ['animezin', 'sair pra comer', 'yt']
  carro = {
    modelo: 'uno',
    ano: 2018
  }
}
