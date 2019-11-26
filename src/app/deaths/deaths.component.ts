import { Component, OnInit } from '@angular/core';
import { BbService } from '../servicios/bb.service';

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.component.html',
  styleUrls: ['./deaths.component.scss'],
})
export class DeathsComponent implements OnInit {

  deaths: Array<any>;

  constructor(
    private services: BbService
  ) { }

  ngOnInit() {
    this.services.getDeaths().subscribe(
      (deathsdata: Array<any>) => {
        console.log(deathsdata);
        this.deaths = deathsdata;
      },
      err => {
        console.log(err);
      }
    );
  }

}
