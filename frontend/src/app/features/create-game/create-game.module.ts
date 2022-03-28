import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/material/material.module';
import { ArmorsComponent } from './armors/armors.component';
import { IdentitiesComponent } from './identities/identities.component';
import { LevelsComponent } from './levels/levels.component';
import { MoneyComponent } from './money/money.component';
import { NewCharacterComponent } from './new-character/new-character.component';
import { ResourcesComponent } from './resources/resources.component';
import { SkillsComponent } from './skills/skills.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
      IdentitiesComponent,
      ResourcesComponent,
      LevelsComponent,
      ArmorsComponent,
      SkillsComponent,
      StatisticsComponent,
      MoneyComponent,
      NewCharacterComponent
  ],
  exports: [
    IdentitiesComponent,
    ResourcesComponent,
    LevelsComponent,
    ArmorsComponent,
    SkillsComponent,
    StatisticsComponent,
    MoneyComponent,
    NewCharacterComponent
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule
  ]
})
export class CreateGameModule { }
