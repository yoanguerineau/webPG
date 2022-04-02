import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from 'src/assets/models/character';
import { GameMasterControllerService } from '../core/api/v1';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private gameMasterController: GameMasterControllerService) { }

  public rollDice(min: number, max: number): Observable<number> {
    return this.gameMasterController.rollDice(min, max);
  }

  public createGame(characterList: Character[]): Observable<string> {
    return this.gameMasterController.createGame(characterList);
  }
}
