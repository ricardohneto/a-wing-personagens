import { PersonagemService } from './../../services/personagem.service';
import { Personagem } from './../../models/Personagem';
import { Component, OnInit, HostBinding } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personagem-form',
  templateUrl: './personagem-form.component.html',
  styleUrls: ['./personagem-form.component.css']
})
export class PersonagemFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  personagem: Personagem = {
    cod_personagem: 0,
    nom_personagem: '',
    descricao: '',
    imagem: '',
    created_at: new Date()
  }

  edit: boolean = false;

  constructor(private personagemService: PersonagemService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.cod_Personagem) {
      this.personagemService.getUm(params.cod_Personagem)
      .subscribe (
        res => {
          console.log(res);
          this.personagem = res;
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }

  saveNewPersonagem() {
    delete this.personagem.cod_personagem;
    delete this.personagem.created_at;

    this.personagemService.savePersonagem(this.personagem)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/personagens']);
        },
        err => console.error(err)
      )
  }

  updatePersonagem() {
    delete this.personagem.created_at;

    this.personagemService.updatePersonagem(this.personagem.cod_personagem, this.personagem)
      .subscribe (
        res => {
          console.log(res);
          this.router.navigate(['/personagens']);
        },
        err => console.error(err)
    )
  }

}
