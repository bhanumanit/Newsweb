import { Component, OnInit } from '@angular/core';
import { NewswebserviceService } from '../service/newswebservice.service'

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor(private science:NewswebserviceService) { }
  displaySci:any=[];

  ngOnInit(): void {
    this.science.sceinceNews().subscribe((result)=>
    {
      this.displaySci=result.articles;
    })
  }

}
