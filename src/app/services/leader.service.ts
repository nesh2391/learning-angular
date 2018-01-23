import { Injectable } from '@angular/core';
import { People } from '../shared/People';
import { Employees } from '../shared/Employees';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class LeaderService {

  constructor() { }

  getAllEmployees() : Observable<People[]> {
    return Observable.of(Employees).delay(2000);
  }
  getFeaturedLeader() : Observable<People> {
    return Observable.of(Employees.filter(People=>People.featured==1)[0]).delay(2000); 
  }

}
