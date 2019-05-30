import { Personagem } from './../models/Personagem';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPersonagem() {
    return this.http.get(`${this.API_URI}/personagens`);
  }

  getUm(cod_personagem: string) {
    return this.http.get(`${this.API_URI}/personagens/${cod_personagem}`);
  }

  deletePersonagem(cod_personagem: string) {
    return this.http.delete(`${this.API_URI}/personagens/${cod_personagem}`);
  }

  savePersonagem(personagem: Personagem) {
    return this.http.post(`${this.API_URI}/personagens`, personagem);
  }

  updatePersonagem(cod_personagem: string|number, updatedPersonagem: Personagem): Observable<Personagem>  {
    return this.http.put(`${this.API_URI}/personagens/${cod_personagem}`, updatedPersonagem);
  }

}
