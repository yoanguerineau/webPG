import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.scss']
})
export class JoinGameComponent implements OnInit {

  public joinGameFormGroup!: FormGroup;
  public fullyInit = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.joinGameFormGroup = this.fb.group({
      login: new FormControl(),
      id: new FormControl()
    });

    this.fullyInit = true;
  }

  onSubmit() {
    console.log(this.joinGameFormGroup.value);
  }

}
