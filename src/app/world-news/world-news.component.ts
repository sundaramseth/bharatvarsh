import { Component } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-world-news',
  templateUrl: './world-news.component.html',
  styleUrls: ['./world-news.component.css']
})
export class WorldNewsComponent {

  constructor(private api:NewsapiService){}

  topWorldHeadlines:any[]=[];

  topWorldHeadlines2:any[]=[];


  ngOnInit():void{
    this.api.worldHeadlines().subscribe(result =>{
      console.log(result);
      this.topWorldHeadlines = result.articles;
    });

    this.api.worldTopHeadlines().subscribe(result =>{
      console.log(result);
      this.topWorldHeadlines2 = result.articles;
    })
  }
}
