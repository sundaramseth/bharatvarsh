import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  

  constructor(private _http:HttpClient) { }

  wheather = 'https://api.weatherstack.com/current?access_key=99d13db67d29def2c4bd14fe32ec3ae4&query=Delhi';
   
  worldNews ='https://newsapi.org/v2/everything?q=world&apiKey=6a37fa5f3d8c4faf83a68ccce08cb51d';

  worldTopHeadline = 'https://newsapi.org/v2/everything?q=top&apiKey=6a37fa5f3d8c4faf83a68ccce08cb51d'

  worldTopTechHeadline = 'https://newsapi.org/v2/everything?q=technology&apiKey=6a37fa5f3d8c4faf83a68ccce08cb51d'

  topIndiaHeadline = 'https://newsapi.org/v2/everything?domains=hindustantimes.com,thetimes.co.uk&apiKey=6a37fa5f3d8c4faf83a68ccce08cb51d'

  topSportsHeadline = 'https://newsapi.org/v2/everything?sources=bbc-sport&apiKey=6a37fa5f3d8c4faf83a68ccce08cb51d'

  
  topNews = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=6a37fa5f3d8c4faf83a68ccce08cb51d';

  techNews = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=6a37fa5f3d8c4faf83a68ccce08cb51d';

  sportsNews = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=6a37fa5f3d8c4faf83a68ccce08cb51d';

  polityNews = 'https://newsapi.org/v2/top-headlines?country=in&category=politics&apiKey=6a37fa5f3d8c4faf83a68ccce08cb51d';

  polityNews2 = 'https://newsapi.org/v2/everything?q=election&apiKey=6a37fa5f3d8c4faf83a68ccce08cb51d';

  weatherIndia():Observable<any>{
    return this._http.get(this.wheather);
  }

  worldHeadlines(): Observable<any>{
    return this._http.get(this.worldNews);
  }

  
  worldTopHeadlines(): Observable<any>{
    return this._http.get(this.worldTopHeadline);
  }

  worldTopTechHeadlines(): Observable<any>{
    return this._http.get(this.worldTopTechHeadline);
  }

  indiaLatestHeadlines(): Observable<any>{
    return this._http.get(this.topIndiaHeadline);
  }

  topHeadlines(): Observable<any>{
    return this._http.get(this.topNews);
  }

  techHeadlines(): Observable<any>{
    return this._http.get(this.techNews);
  }
  
  sportsHeadlines(): Observable<any>{
    return this._http.get(this.sportsNews);
  }

  SportsHeadlineTop(): Observable<any>{
    return this._http.get(this.topSportsHeadline);
  }

  PolityNews(): Observable<any>{
    return this._http.get(this.polityNews)
  }

  
  PolityNews2(): Observable<any>{
    return this._http.get(this.polityNews2)
  }

}
