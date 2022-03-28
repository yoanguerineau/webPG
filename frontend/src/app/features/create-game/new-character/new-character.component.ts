import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Character } from 'src/assets/models/character';
import { ArmorsComponent } from '../armors/armors.component';
import { IdentitiesComponent } from '../identities/identities.component';
import { LevelsComponent } from '../levels/levels.component';
import { MoneyComponent } from '../money/money.component';
import { ResourcesComponent } from '../resources/resources.component';
import { SkillsComponent } from '../skills/skills.component';
import { StatisticsComponent } from '../statistics/statistics.component';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss']
})
export class NewCharacterComponent implements OnInit {

  @ViewChild(IdentitiesComponent) identitiesComponent!: IdentitiesComponent;
  @ViewChild(ResourcesComponent) resourcesComponent!: ResourcesComponent;
  @ViewChild(LevelsComponent) levelsComponent!: LevelsComponent;
  @ViewChild(ArmorsComponent) armorsComponent!: ArmorsComponent;
  @ViewChild(SkillsComponent) skillsComponent!: SkillsComponent;
  @ViewChild(StatisticsComponent) statisticsComponent!: StatisticsComponent;
  @ViewChild(MoneyComponent) moneyComponent!: MoneyComponent;
  
  constructor(private fb: FormBuilder) { }

  @Output() characterEvent = new EventEmitter<Character>()
  @Output() cancelCharacterEvent = new EventEmitter<boolean>()

  public newCharFormGroup!: FormGroup;

  ngOnInit(): void {
    this.newCharFormGroup = this.fb.group({ });
    console.log(this.identitiesComponent);
  }

  ngAfterViewInit() {
    this.newCharFormGroup.addControl('identities', this.identitiesComponent.identitiesFormGroup);
    this.identitiesComponent.identitiesFormGroup.setParent(this.newCharFormGroup);
    
    this.newCharFormGroup.addControl('resources', this.resourcesComponent.resourcesFormGroup);
    this.resourcesComponent.resourcesFormGroup.setParent(this.newCharFormGroup);
  
    this.newCharFormGroup.addControl('levels', this.levelsComponent.levelsFormGroup);
    this.levelsComponent.levelsFormGroup.setParent(this.newCharFormGroup);

    this.newCharFormGroup.addControl('armors', this.armorsComponent.armorsFormGroup);
    this.armorsComponent.armorsFormGroup.setParent(this.newCharFormGroup);

    this.newCharFormGroup.addControl('skills', this.skillsComponent.skillsFormGroup);
    this.skillsComponent.skillsFormGroup.setParent(this.newCharFormGroup);

    this.newCharFormGroup.addControl('statistics', this.statisticsComponent.statisticsFormGroup);
    this.statisticsComponent.statisticsFormGroup.setParent(this.newCharFormGroup);

    this.newCharFormGroup.addControl('money', this.moneyComponent.moneyFormGroup);
    this.moneyComponent.moneyFormGroup.setParent(this.newCharFormGroup);
  }
  
  debugCheckForm() {
    console.log(this.newCharFormGroup.value);
  }

  createCharacter() {
    let tempCharacter: Character = {
      identities: [],
      resources: [],
      levels: [],
      armors: [],
      skills: [],
      statistics: [],
      money: {
        name: '',
        symbol: '',
        value: 0
      }
    };
    
    Object.keys(this.newCharFormGroup.controls).forEach(i => {
      Object.keys(this.newCharFormGroup.value[i]).forEach(j => {
        const val = this.newCharFormGroup.get(i)!.value[j];
        if(typeof val === "object") {
          switch(i) {
            case "identities":
              tempCharacter.identities.push(val);
              break;
            case "resources":
              if(val.value !== null) {
                tempCharacter.resources.push(val);
              }
              break;
            case "levels":
              tempCharacter.levels.push(val);
              break;
            case "armors":
              tempCharacter.armors.push(val);
              break;
            case "skills":
              tempCharacter.skills.push(val);
              break;
            case "statistics":
              tempCharacter.statistics.push(val);
              break;
              break;
            default:
              break;
          }
        }
      });
    });

    tempCharacter.money.name = this.newCharFormGroup.get('money')!.value['name'];
    tempCharacter.money.symbol = this.newCharFormGroup.get('money')!.value['symbol'];
    tempCharacter.money.value = this.newCharFormGroup.get('money')!.value['value'];

    if(this.isValidCharacterForm(tempCharacter)) {
      this.characterEvent.emit(tempCharacter);
    }
  }

  isValidCharacterForm(c: Character): boolean {
    let isValid = true;
    c.identities.forEach(e => {
      if(e.name == null || e.type == null) isValid = false;
    });

    c.resources.forEach(e => {
      if(e.value == null || e.type == null) isValid = false;
    });
    
    c.levels.forEach(e => {
      if(e.value == null || e.type == null) isValid = false;
    });
    
    c.armors.forEach(e => {
      if(e.value == null || e.type == null) isValid = false;
    });
    
    c.skills.forEach(e => {
      if(e.name == null || e.mainStat == null || e.value == null) isValid = false;
    });
    
    c.statistics.forEach(e => {
      if(e.name == null || e.value == null) isValid = false;
    });
    
    if(c.money.name == null || c.money.symbol == null) isValid = false;
    
    return isValid;
  }

  cancelCharacter() {
    this.cancelCharacterEvent.emit(false);
  }
}

