import { Component, OnInit } from '@angular/core';
import { BbService } from '../servicios/bb.service';
import {
  Plugins
} from '@capacitor/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {

  characters: Array<any>;

  constructor(
    private servicios: BbService
  ) { }

  ngOnInit() {
    this.servicios.getCharacters().subscribe(
      (charactersdata: Array<any>) => {
        console.log(charactersdata);
        this.characters = charactersdata;
      },
      err => {
        console.log(err);
      }
    );
  }

  async downloadInfo(character) {
    console.log(character);
    Plugins.FileSharer.share({
      filename: character.img,
      base64Data: "...",
      contentType: "image/jpeg",
    }).then(() => {
      // do sth
    }).catch(error => {
      console.error("File sharing failed", error.message);
    });
  }

}
