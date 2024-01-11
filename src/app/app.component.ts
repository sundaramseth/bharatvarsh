import { Component } from '@angular/core';
import { NewsapiService } from './newsapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsapp';

  today: number = Date.now();


  constructor(private api:NewsapiService){}

  weatherData:any[]=[];

  ngOnInit():void{
   this.api.weatherIndia().subscribe(result =>{
    console.log(result);
   })
  }
}
