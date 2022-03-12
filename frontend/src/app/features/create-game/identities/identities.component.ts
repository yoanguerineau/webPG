import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-identities',
  templateUrl: './identities.component.html',
  styleUrls: ['./identities.component.scss']
})
export class IdentitiesComponent implements OnInit {

  public fullyInit = false;
  public identitiesFormGroup!: FormGroup;
  public identitiesTypes = ['Nom', 'Prénom', 'Surnom', 'Titre', 'Origine'];
  eventEmitter = new EventEmitter<FormGroup>();
  public previousNbIdentities = 1;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    let defaultValueNbIdentities = this.previousNbIdentities;
    
    this.identitiesFormGroup = this.fb.group({
      nbIdentities: new FormControl(defaultValueNbIdentities, [Validators.max(this.identitiesTypes.length), Validators.min(1)])
    });
    this.updateForm(defaultValueNbIdentities);
    this.identitiesFormGroup.get("nbIdentities")?.valueChanges.subscribe(x => {
      this.updateForm(x);
      this.previousNbIdentities = x;
    });

    this.fullyInit=true;
  }

  createNumberArray(size: number): number[] {
    return Array(size).fill(undefined).map((x,i) => (i+1));
  }

  updateForm(value: number) {
    let delta = value-this.previousNbIdentities;
    if(delta < 0) {
      for(let i=0; i<Math.abs(delta); i++) {
        this.identitiesFormGroup.removeControl((value+(i+1)).toString());
      }
    }
    
    for(let i=1; i<value+1; i++) { 
      this.identitiesFormGroup.addControl(i.toString(), this.fb.group({
        name: new FormControl(),
        type: new FormControl()
      }));
    }
  }
}
