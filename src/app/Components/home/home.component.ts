import { Router } from '@angular/router';
import { RestaurantService } from './../../Service/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { Cities, Restaurant } from 'src/app/Model/Data.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  RestaurantList: Restaurant[] = [];
  CitiesList: Cities[] = [];
  selectedCity:any;

  constructor(
    private restaurantservice: RestaurantService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.search()
    this.restaurantservice.gitCities().subscribe((a) => {
      console.log(a);
      this.CitiesList = a;
    });
  }

  selected(hh:any){
    this.selectedCity = hh.target.value;
    console.log(hh.target.value)

  }
  search() {
    //   this.router.navigate(['/search'], {
    // queryParams: { data: JSON.stringify(searched.value) },
    // this.restaurantservice.searchRestaurants().subscribe((a) => {
    //   this.RestaurantList = a;
    //   console.log(a);
    // });
  }
}
