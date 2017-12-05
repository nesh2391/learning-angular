import { Component, OnInit } from '@angular/core';
import { People } from '../shared/People';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  Employees :People[];

  constructor(private leaderService: LeaderService) {
   }

  ngOnInit() {
    this.Employees=this.leaderService.getAllEmployees();
  }

  
}
