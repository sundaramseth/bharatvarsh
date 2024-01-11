import { Component,OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent {

  constructor(private api:NewsapiService){}
   techHeadlinesData: any[] = [];
   techHeadlinesData2: any[] = [];
  
  ngOnInit():void{
    this.api.techHeadlines().subscribe(result =>{
     console.log(result);
     this.techHeadlinesData = result.articles;
    })


    this.api.worldTopTechHeadlines().subscribe(result =>{
      this.techHeadlinesData2 = result.articles;
    })
   }
}
