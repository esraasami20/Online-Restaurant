import { RestaurantService } from './../../Service/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/Model/Data.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  RestaurantList: Restaurant[] = [];

  constructor(private ar:ActivatedRoute,private restaurantService:RestaurantService) {}

  ngOnInit(): void {
    let searched: string = '';

    this.ar.params.subscribe((a) => {
      searched = a['searched'];
    });
    this.restaurantService.searchRestaurants(searched).subscribe((a) => {
      this.RestaurantList = a;
    });
    // this.userService.searchUser(searched).subscribe((a) => {
    //   this.users = a;
    // });
  }
}
