import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { PlayersComponent } from './players/players';
import { SigninComponent } from './signin/signin';
import { CreateCharacterComponent } from './create-character/create-character';
import { CreateGuildComponent } from './create-guild/create-guild';
import { CharacterFactionComponent } from './character-faction/character-faction';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'create-character', component: CreateCharacterComponent },
  { path: 'create-guild', component: CreateGuildComponent },
  { path: 'character-faction', component: CharacterFactionComponent },
];