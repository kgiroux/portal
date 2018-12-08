import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DofustuffComponent } from './dofustuff.component';
import { CharacterComponent } from './character/character.component';
import { ItemsComponent } from './items/items.component';
import { SpellComponent } from './spell/spell.component';

@NgModule({
  declarations: [
    ItemsComponent,
    SpellComponent,
    DofustuffComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule
  ],
})
export class DofustuffModule { }
