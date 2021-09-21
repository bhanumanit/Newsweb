import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewswebserviceService {

  constructor(private _http:HttpClient) {}

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=61e54e603d964da5b416aee2e26446f2";
  technewsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=61e54e603d964da5b416aee2e26446f2";
  sciencenewsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=61e54e603d964da5b416aee2e26446f2";
  topHeading():Observable<any>{
    return this._http.get(this.newsApiUrl);
  }
  techNews():Observable<any>{
    return this._http.get(this.technewsApiUrl);
  }
  sceinceNews():Observable<any>{
    return this._http.get(this.sciencenewsApiUrl);
  }
}
