import { Component, Input, OnInit } from '@angular/core';
import { SmartService } from '../services/smart.service';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {

  @Input() nomSmart: string='';
  
  @Input() etatSmart: string='';

  @Input() indexOfSmart: number=0;
  constructor(private smartService:SmartService) { }
  
  ngOnInit(): void {
  }

  allumerUn(){
    this.smartService.basculeOnOne(this.indexOfSmart);
  }
  eteintUn(){
    this.smartService.basculeOffOne(this.indexOfSmart);
  }

  


}
