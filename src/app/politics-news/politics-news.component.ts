import { Component } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-politics-news',
  templateUrl: './politics-news.component.html',
  styleUrls: ['./politics-news.component.css']
})
export class PoliticsNewsComponent {

  constructor(private api:NewsapiService){}
   sportsHeadlinesData: any[] = [];

   sports2HeadlinesData: any[] = [];
  
  ngOnInit():void{
    this.api.PolityNews().subscribe(result =>{
     this.sportsHeadlinesData = result.articles;
    });

    this.api.PolityNews2().subscribe(result =>{
      console.log(result);
      this.sports2HeadlinesData = result.articles;
    })
   }
}
