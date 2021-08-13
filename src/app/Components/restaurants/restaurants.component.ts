import { RestaurantService } from './../../Service/restaurant.service';
import { HomeService } from './../../Service/home.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/Model/Data.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent implements OnInit {
  RestaurantList: Restaurant[] = [];

  constructor(
    private restaurantservice: RestaurantService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurantservice.getRestaurants().subscribe((a) => {
      this.RestaurantList = a;
      console.log(a);
    });
  }
  NavigateToMenuComponent(item: Restaurant) {
    this.router.navigate(['/Restaurant-Menu'], {
      queryParams: { data: JSON.stringify(item) },
    });
  }
}
