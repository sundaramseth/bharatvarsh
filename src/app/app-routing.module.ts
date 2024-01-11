import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopNewsComponent } from './top-news/top-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { WorldNewsComponent } from './world-news/world-news.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { PoliticsNewsComponent } from './politics-news/politics-news.component';

const routes: Routes = [
  {path: '', component:TopNewsComponent},
  {path:'tech', component:TechNewsComponent},
  {path:'world', component:WorldNewsComponent},
  {path:'sports', component:SportsNewsComponent},
  {path:'politics',component:PoliticsNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
