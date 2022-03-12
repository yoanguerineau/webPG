import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.scss']
})
export class LevelsComponent implements OnInit {

  public fullyInit = false;
  public levelsFormGroup!: FormGroup;
  public levelTypes = ['Personnage', 'Monture/Véhicule', 'Animal de compagnie'];
  eventEmitter = new EventEmitter<FormGroup>();
  public previousNbLevels = 1;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    let defaultValueNbLevels = this.previousNbLevels;
    this.levelsFormGroup = this.fb.group({
      nbLevels: new FormControl(defaultValueNbLevels, [Validators.max(this.levelTypes.length), Validators.min(1)])
    });

    this.updateForm(defaultValueNbLevels);
    this.levelsFormGroup.get("nbLevels")?.valueChanges.subscribe(x => {
      this.updateForm(x);
      this.previousNbLevels = x;
    });

    this.fullyInit=true;
  }

  createNumberArray(size: number): number[] {
    return Array(size).fill(undefined).map((x,i) => (i+1));
  }

  updateForm(value: number) {
    let delta = value-this.previousNbLevels;
    if(delta < 0) {
      for(let i=0; i<Math.abs(delta); i++) {
        this.levelsFormGroup.removeControl((value+(i+1)).toString());
      }
    }
    
    for(let i=1; i<value+1; i++) {
      this.levelsFormGroup.addControl(i.toString(), this.fb.group({
        value: new FormControl(),
        type: new FormControl()
      }));
    }
  }

}
