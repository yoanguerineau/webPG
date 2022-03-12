import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { IdentitiesComponent } from './identities/identities.component';
import { LevelsComponent } from './levels/levels.component';
import { ResourcesComponent } from './resources/resources.component';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {

  @ViewChild(IdentitiesComponent) identitiesComponent!: IdentitiesComponent;
  @ViewChild(ResourcesComponent) resourcesComponent!: ResourcesComponent;
  @ViewChild(LevelsComponent) levelsComponent!: LevelsComponent;

  public armorTypes = ['Casque', 'Brassard', 'Collier', 'Plastron', 'Jambière', 'Botte', 'Bague'];

  public createGameFormGroup!: FormGroup;
  public identitiesFormGroup!: FormGroup;

  constructor(private fb: FormBuilder) {
   }

  ngOnInit(): void {

    this.createGameFormGroup = this.fb.group({
      nbArmors: new FormControl(0, [Validators.max(this.armorTypes.length), Validators.min(0)])
    });
  }

  ngAfterViewInit() {
    this.createGameFormGroup.addControl('identities', this.identitiesComponent.identitiesFormGroup);
    this.identitiesComponent.identitiesFormGroup.setParent(this.createGameFormGroup);
    
    this.createGameFormGroup.addControl('resources', this.resourcesComponent.resourcesFormGroup);
    this.resourcesComponent.resourcesFormGroup.setParent(this.createGameFormGroup);
  
    this.createGameFormGroup.addControl('levels', this.levelsComponent.levelsFormGroup);
    this.levelsComponent.levelsFormGroup.setParent(this.createGameFormGroup);
  }

  debugCheckForm() {
    console.log(this.createGameFormGroup.value);
  }

  createNumberArray(size: number): number[] {
    return Array(size).fill(undefined).map((x,i) => (i+1));
  }
}
