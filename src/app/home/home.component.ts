import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { People } from '../shared/People';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  people: People;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService, private leaderService: LeaderService,@Inject('BaseURL') private BaseURL ) { }

  ngOnInit() {
    //this.dish = this.dishservice.getFeaturedDish();
    this.dishservice.getFeaturedDish().subscribe(dish=>this.dish=dish);
    this.promotionservice.getFeaturedPromotion().subscribe(promition=>this.promotion=promition);
    this.leaderService.getFeaturedLeader().subscribe(people=>this.people=people);
  }
  
}