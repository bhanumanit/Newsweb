import { Component, OnInit } from '@angular/core';
import{NewswebserviceService} from '../service/newswebservice.service';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private sports:NewswebserviceService) { }
  displaysports:any=[];

  ngOnInit(): void {
    this.sports.sportsNews().subscribe((result)=>{
      this.displaysports=result.articles;
    })
  }

}
