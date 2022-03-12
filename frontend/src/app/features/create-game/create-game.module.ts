import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/material/material.module';
import { IdentitiesComponent } from './identities/identities.component';
import { LevelsComponent } from './levels/levels.component';
import { ResourcesComponent } from './resources/resources.component';

@NgModule({
  declarations: [
      IdentitiesComponent,
      ResourcesComponent,
      LevelsComponent
  ],
  exports: [
    IdentitiesComponent,
    ResourcesComponent,
    LevelsComponent
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
