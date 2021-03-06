import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  errMess: string;
  dishes: Dish[];
  
    selectedDish: Dish=null;
  
    constructor(private dishService: DishService,@Inject('BaseURL') private BaseURL) { }
    
    ngOnInit() {
      //this.dishes = this.dishService.getDishes();
      this.dishService.getDishes().subscribe(dishes=>{this.dishes=dishes;},errmess => this.errMess = <any>errmess);
      //this.selectedDish = this.dishes[0];
    }




}
