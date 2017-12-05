import { Injectable } from '@angular/core';
import { People } from '../shared/People';
import { Employees } from '../shared/Employees';

@Injectable()
export class LeaderService {

  constructor() { }

  getAllEmployees() : People[] {
    return Employees;
  }
  getFeaturedLeader() : People {
    return Employees.filter(People=>People.featured==1)[0];
  }

}
