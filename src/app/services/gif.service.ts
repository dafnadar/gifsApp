import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  limit: number = 10;
  api_key = "PNxu7UPDJFqvuDXWtSna7BKq7eCFsqcC";
  constructor(private http:HttpClient) { }

  getGifs(searchTerm: string, offset: number) { 
    const apiLink = `http://api.giphy.com/v1/gifs/search?api_key=${this.api_key}&limit=${this.limit}&offset=${offset}&q=${searchTerm}`;         
    return this.http.get(apiLink)     
  }
}
