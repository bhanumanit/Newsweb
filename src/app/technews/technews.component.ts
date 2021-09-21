import { Component, OnInit } from '@angular/core';
import {NewswebserviceService} from '../service/newswebservice.service'

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private tech:NewswebserviceService) { }
  technology:any=[];

  ngOnInit(): void {
    this.tech.techNews().subscribe((result)=>{
      this.technology=result.articles;
    });
    
  }

}
