import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  url = environment.urlMarvelApi
  constructor(private http: HttpClient) { }

  getMarvel(){
    const query = {
      orderBy: "name",
      ts: "4",
      apikey: "bca2b2e49376fc42eadd2e72d4a2a664",
      hash: "a60ecccc5d6e46e19e31440d5d85ac5b"
    }
    return this.http.get(`${this.url}:443/v1/public/characters`, {params: query});
  }
}
