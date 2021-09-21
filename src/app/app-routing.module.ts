import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';
import {ScienceComponent} from './science/science.component'

const routes: Routes = [
  {path:'', component:TopheadingComponent},
  {path:'tech', component:TechnewsComponent},
  {path:'science', component:ScienceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
