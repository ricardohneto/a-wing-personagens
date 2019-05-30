import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PersonagemFormComponent } from './components/personagem-form/personagem-form.component';
import { PersonagemListComponent } from './components/personagem-list/personagem-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PersonagemService } from './services/personagem.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PersonagemFormComponent,
    PersonagemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PersonagemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
