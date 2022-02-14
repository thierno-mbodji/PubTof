import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  title = 'PubNew';
  desc =
    'Sauvegarder vos images sur le cloud en les partageant avec le reste du monde';
  constructor() { }
}
