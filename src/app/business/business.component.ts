import { Component, OnInit } from '@angular/core';
import {NewswebserviceService} from '../service/newswebservice.service';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private businews:NewswebserviceService) { }
  displaybusi:any=[];

  ngOnInit(): void {
    this.businews.busiNews().subscribe((result)=>{
      this.displaybusi=result.articles;
    })
  }

}
