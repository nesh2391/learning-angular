import { Injectable } from '@angular/core';
import { People } from '../shared/People';
import { Employees } from '../shared/Employees';

@Injectable()
export class LeaderService {

  constructor() { }

  getAllEmployees() : People[] {
    return Employees;
  }
  getAll() : People[]{
    return Employees;
  }

}
