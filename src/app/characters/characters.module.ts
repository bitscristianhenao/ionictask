import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CharactersComponent } from './characters.component';
import { CharacterselectedComponent } from './characterselected/characterselected.component';

const routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CharactersComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CharactersComponent, CharacterselectedComponent]
})
export class CharactersModule { }
