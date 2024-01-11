import { Component } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent {

  constructor(private api:NewsapiService){}
   sportsHeadlinesData: any[] = [];

   sports2HeadlinesData: any[] = [];
  
  ngOnInit():void{
    this.api.sportsHeadlines().subscribe(result =>{
     this.sportsHeadlinesData = result.articles;
    });

    this.api.SportsHeadlineTop().subscribe(result =>{
      console.log(result);
      this.sports2HeadlinesData = result.articles;
    })
   }
}
