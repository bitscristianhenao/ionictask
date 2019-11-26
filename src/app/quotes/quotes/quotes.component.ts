import { Component, OnInit } from '@angular/core';
import { BbService } from 'src/app/servicios/bb.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {

  quotes: Array<any>;

  constructor(
    private services: BbService
  ) { }

  ngOnInit() {
    this.services.getQuotes().subscribe(
      (quotesdata: Array<any>) => {
        console.log(quotesdata);
        this.quotes = quotesdata;
      },
      err => {
        console.log(err);
      }
    );
  }

}
