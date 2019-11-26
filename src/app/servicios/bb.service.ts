import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BbService {

  constructor(
    private http: HttpClient
  ) { }

  public getCharacters() {
    return this.http.get(
      'https://www.breakingbadapi.com/api/characters',
    );
  }

  public getEpisodes() {
    return this.http.get(
      'https://www.breakingbadapi.com/api/episodes',
    );
  }

  public getQuotes() {
    return this.http.get(
      'https://www.breakingbadapi.com/api/quotes',
    );
  }

  public getDeaths() {
    return this.http.get(
      'https://www.breakingbadapi.com/api/deaths',
    );
  }
}
