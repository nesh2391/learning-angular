import { Injectable } from '@angular/core';
import { People } from '../shared/People';
import { Employees } from '../shared/Employees';

@Injectable()
export class LeaderService {

  constructor() { }

  getAllEmployees() : Promise<People[]> {
    return new Promise(resolve=>{
      setTimeout(() => resolve(Employees), 2000);
    });
  }
  getFeaturedLeader() : Promise<People> {
    return new Promise(resolve=>{
      setTimeout(() => resolve(Employees.filter(People=>People.featured==1)[0]), 2000);
    });
  }

}
