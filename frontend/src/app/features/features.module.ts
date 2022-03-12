import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { JoinGameComponent } from './join-game/join-game.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UnknownPageComponent } from './unknown-page/unknown-page.component';

@NgModule({
  declarations: [
    MenuComponent,
    CreateGameComponent,
    JoinGameComponent,
    UnknownPageComponent
  ],
  exports: [
    MenuComponent,
    CreateGameComponent,
    JoinGameComponent,
    UnknownPageComponent
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule
  ]
})
export class FeaturesModule { }
