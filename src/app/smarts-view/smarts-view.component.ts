import { Component, OnInit } from '@angular/core';
import { SmartService } from '../services/smart.service';

@Component({
  selector: 'app-smarts-view',
  templateUrl: './smarts-view.component.html',
  styleUrls: ['./smarts-view.component.css']
})
export class SmartsViewComponent implements OnInit {
  smarts:any[''];

  constructor(private smartService: SmartService) { }

  ngOnInit(): void {
    this.smarts=this.smartService.smarts;
  }

}
