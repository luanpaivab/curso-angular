import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals'

  remove(animals: Animal[], animal: Animal) {
    console.log('Animal removido...')
    return animals.filter((a) => animal.nome !== a.nome)
  }

  constructor(private http: HttpClient) {}

  //Como é um evento de observação, precisa passar um generic
  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl)
  }

}