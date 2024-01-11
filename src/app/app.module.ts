import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNewsComponent } from './top-news/top-news.component';
import {HttpClientModule} from '@angular/common/http';
import { NewsapiService } from './newsapi.service';
import { ShortPipe } from './short.pipe';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { WorldNewsComponent } from './world-news/world-news.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { PoliticsNewsComponent } from './politics-news/politics-news.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNewsComponent,
    ShortPipe,
    TechNewsComponent,
    WorldNewsComponent,
    SportsNewsComponent,
    PoliticsNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
