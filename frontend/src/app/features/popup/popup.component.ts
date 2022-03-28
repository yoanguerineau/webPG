import { Component, OnInit } from '@angular/core';
import { Character } from 'src/assets/models/character';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  public player!: Character;

  constructor() { }

  ngOnInit(): void {
  }

}
