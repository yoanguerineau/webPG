import { Component, OnInit } from '@angular/core';
import playerOne from '../../../assets/json/character/playerOne.json'
import { MatDialog } from '@angular/material/dialog';
import { Character } from 'src/assets/models/character';
import { PopupComponent } from '../popup/popup.component';
import { BackendService } from 'src/app/services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {
  
  public showSpinner = false;

  public showCreateCharacter = false;

  public characterList: Character[] = [];

  constructor(public dialog: MatDialog, public backendService: BackendService, private router: Router) {
  }

  setChowCreateCharacter(val: boolean) {
    this.showCreateCharacter = val;
  }

  ngOnInit(): void {
    this.addCharacter(playerOne);
  }

  addCharacter(c: Character) {
    this.characterList.push(c);
    this.showCreateCharacter = false;
  }

  showCharacterInfos(i: number) {
    const dialogRef = this.dialog.open(PopupComponent);
    dialogRef.componentInstance.player = this.characterList[i];
  }

  deleteCharacter(i: number) {
    let start: Character[] = [];
    if(i != 0) {
      start = this.characterList.slice(0,i);
    }
    let end = this.characterList.slice(i+1);

    this.characterList = start.concat(end);
  }

  switchCharacterView() {
    this.showCreateCharacter = !this.showCreateCharacter;
  }
  
  debugCheckForm() {
    console.log(this.characterList);
  }

  isGameStartBlocked(): boolean {
    return (this.characterList.length == 0)
  }

  startGame() {
    console.log("Starting a new game...");
    this.showSpinner = true;
    this.backendService.createGame(this.characterList).subscribe({
      next: value => {
        this.router.navigate(['/game'], { queryParams: { id: value}});
      },
      error: err => {
        console.error(err);
      }
    });
  }
}
