import { Component, OnInit } from '@angular/core';
import { BbService } from 'src/app/servicios/bb.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit {

  episodes: Array<any>;
  hide = true;

  constructor(
    private servicios: BbService
  ) { }

  ngOnInit() {
    this.servicios.getEpisodes().subscribe(
      (episodesdata: Array<any>) => {
        console.log(episodesdata);
        this.episodes = episodesdata;
      },
      err => {
        console.log(err);
      }
    );
  }

  moreInfo() {
    if (this.hide) {
      this.hide = false; 
    } else {
      this.hide = true; 
    }
  }

}
