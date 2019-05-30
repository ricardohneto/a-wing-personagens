import { Personagem } from './../../models/Personagem';
import { PersonagemService } from './../../services/personagem.service';
import { Component, OnInit, HostBinding } from '@angular/core';



@Component({
  selector: 'app-personagem-list',
  templateUrl: './personagem-list.component.html',
  styleUrls: ['./personagem-list.component.css']
})
export class PersonagemListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  personagens: any = [];

  constructor(private personagemService: PersonagemService) { }

  ngOnInit() {
    this.getPersonagens();
  }

  getPersonagens() {
    this.personagemService.getPersonagem().subscribe (
      res => {
        this.personagens = res;
      },
      err => console.error(err)
    )
  }

  deletePersonagem(cod_personagem: string) {
    this.personagemService.deletePersonagem(cod_personagem)
    .subscribe(
      res => {
        console.log(res)
        this.getPersonagens();
      },
      err => console.log(err)
    )
  }
}
