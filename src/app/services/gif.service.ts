import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  API_KEY = "PNxu7UPDJFqvuDXWtSna7BKq7eCFsqcC";
  API_URL = `http://api.giphy.com/v1/gifs/search?api_key=${this.API_KEY}&q=`;

  constructor(private http:HttpClient) { }

  getGifs(keyWords: string) {
    var apiLink = this.API_URL + keyWords;    
    return this.http.get(apiLink)     
  }
}
