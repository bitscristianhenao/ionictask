import { Component, OnInit } from '@angular/core';
import { BbService } from '../servicios/bb.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private servicios: BbService
  ) {}

  ngOnInit() {
  }
}
