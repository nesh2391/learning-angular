import { Component, OnInit } from '@angular/core';
import { People } from '../shared/People';
import { LeaderService } from '../services/leader.service';
import { Employees } from '../shared/Employees';

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
    this.leaderService.getAllEmployees().subscribe(Employees=>this.Employees=Employees);
  }

  
}
