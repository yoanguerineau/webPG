import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import playerOne from '../../../assets/json/character/playerOne.json'
import { MatDialog } from '@angular/material/dialog';
import { Character } from 'src/assets/models/character';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {

  public createGameFormGroup!: FormGroup;
  public showCreateCharacter = false;

  public characterList: Character[] = [];

  constructor(public dialog: MatDialog) {
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
    dialogRef.componentInstance.isError = false;
    let content = "";
    this.characterList[i].identities.forEach(e => {
      content+= e.type + " " + e.name + " ";
    });
    dialogRef.componentInstance.content = content;
  }

  switchCharacterView() {
    this.showCreateCharacter = !this.showCreateCharacter;
  }
  
  debugCheckForm() {
    console.log(this.characterList);
  }
}
