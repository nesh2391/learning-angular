import { Component, OnInit, Input, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../shared/Comment';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  formErrors = {
    author:'',
    comment:''
  };
  validationMessages = {
    'author':{
    'required': 'Name is required.',
    'minlength': 'Name must be at least 2 characters long.',
    'maxlength': 'Name cannot be more than 25 characters long.'},
    'comment':{
      'required': 'Comment is required.',
      'minlength': 'Comment must be at least 2 characters long.',
      'maxlength': 'Comment cannot be more than 100 characters long.'
    }
  };
  dishcopy = null;
  dish: Dish;
  dishIds: number[];
  prev: number;
  commentForm: FormGroup;
  submitedComment: Comment;
  next: number;
  current: number;
  errMess:string;
  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,private fb: FormBuilder,@Inject('BaseURL') private BaseURL ) {
      this.createForm();
     }


  ngOnInit( ) {
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params
    .switchMap( (params: Params) =>this.dishservice.getDish(+params['id']) )
    .subscribe(dish => { this.dish = dish; this.dishcopy = dish; this
      .setPrevNext(dish.id); },
      errmess => { this.dish = null; this.errMess = <any>errmess; });
  }
 
  setPrevNext(dishId: number) {
    let index = this.dishIds.indexOf(dishId);
    this.current=index;
    this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds
          .length];
    this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds
          .length];
    }

    createForm(){
      this.commentForm = this.fb.group({
        author:['',[Validators.required,Validators.minLength(2), Validators.maxLength(25)]],
        rating:[1,Validators.required],
        comment:['',[Validators.required,Validators.minLength(2), Validators.maxLength(100)]]
      });

      this.commentForm.valueChanges.subscribe(data=>this.onValuesChanges(data));
      this.onValuesChanges();
    }
    onValuesChanges(data?:any){
      if (!this.commentForm) { return; }
      const form = this.commentForm;
      for (const field in this.formErrors) {
        this.formErrors[field] = '';
        const control = form.get(field);
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
          }
      }
    }
    onSubmit(){
      let d = new Date();
      this.submitedComment=this.commentForm.value;
      this.submitedComment.date=d.toISOString();
      this.dishcopy.comments.push(this.submitedComment);
      this.dishcopy.save().subscribe(dish => { this.dish = dish; console.log(this.dish); });
      this.commentForm.reset();
      //console.log("overall  "+JSON.stringify(this.dish));
    }
  tiles = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  goBack(): void {
    this.location.back();
  }
}