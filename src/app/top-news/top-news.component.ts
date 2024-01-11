import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent {

  today: number = Date.now();

  constructor(private api:NewsapiService){}
  topHeadlinesData: any[] = [];

  topIndianHeadlineData: any[] =[];

  topworldHeadline:any[] = [];

  headlines = '';
  headlineimage = '';
  content = '';
  urlhead=''

  ngOnInit():void{
   this.api.topHeadlines().subscribe(result =>{
    this.topHeadlinesData = result.articles;
    this.headlines = result.articles[0].title;
    this.headlineimage = result.articles[0].urlToImage;
    this.content = result.articles[0].content;
    this.urlhead = result.articles[0].url;
   });

   this.api.indiaLatestHeadlines().subscribe(result =>{
    this.topIndianHeadlineData = result.articles;
   });

   this.api.worldHeadlines().subscribe(result =>{
    this.topworldHeadline = result.articles;
   })
  }
}
