import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-armors',
  templateUrl: './armors.component.html',
  styleUrls: ['./armors.component.scss']
})
export class ArmorsComponent implements OnInit {

  public fullyInit = false;
  public armorsFormGroup!: FormGroup;
  public armorTypes = ['Casque', 'Brassard', 'Collier', 'Plastron', 'Jambière', 'Botte', 'Bague'];
  eventEmitter = new EventEmitter<FormGroup>();
  public previousNbArmors = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    let defaultValueNbArmors = this.previousNbArmors;
    this.armorsFormGroup = this.fb.group({
      nbArmors: new FormControl(defaultValueNbArmors, [Validators.max(this.armorTypes.length), Validators.min(0)])
    });

    this.updateForm(defaultValueNbArmors);
    this.armorsFormGroup.get("nbArmors")?.valueChanges.subscribe(x => {
      this.updateForm(x);
      this.previousNbArmors = x;
    });

    this.fullyInit=true;
  }

  createNumberArray(size: number): number[] {
    return Array(size).fill(undefined).map((x,i) => (i+1));
  }

  updateForm(value: number) {
    let delta = value-this.previousNbArmors;
    if(delta < 0) {
      for(let i=0; i<Math.abs(delta); i++) {
        this.armorsFormGroup.removeControl((value+(i+1)).toString());
      }
    }
    
    for(let i=1; i<value+1; i++) {
      this.armorsFormGroup.addControl(i.toString(), this.fb.group({
        value: new FormControl(),
        type: new FormControl()
      }));
    }
  }

}
