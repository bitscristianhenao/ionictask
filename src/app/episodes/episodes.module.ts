import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EpisodesComponent } from './episodes/episodes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: EpisodesComponent,
      }
    ])
  ],
  declarations: [EpisodesComponent]
})

export class EpisodesModule { }
