import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FeaturesModule } from './features/features.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { CreateGameComponent } from './features/create-game/create-game.component';
import { JoinGameComponent } from './features/join-game/join-game.component';
import { MenuComponent } from './features/menu/menu.component';
import { UnknownPageComponent } from './features/unknown-page/unknown-page.component';

const routes: Routes = [
  { path: '', component: MenuComponent},
  { path: 'create', component: CreateGameComponent },
  { path: 'join', component: JoinGameComponent },
  { path: '**', component: UnknownPageComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    FeaturesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
