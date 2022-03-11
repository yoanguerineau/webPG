import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { JoinGameComponent } from './join-game/join-game.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    MenuComponent,
    CreateGameComponent,
    JoinGameComponent
  ],
  exports: [
    MenuComponent,
    CreateGameComponent,
    JoinGameComponent
  ],
  imports: [
    MaterialModule
  ]
})
export class FeaturesModule { }
