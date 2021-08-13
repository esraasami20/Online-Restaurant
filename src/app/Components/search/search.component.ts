import { RestaurantService } from './../../Service/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/Model/Data.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  RestaurantList: Restaurant[] = [];
  // selectedCity:any;

  constructor(
    private router:Router,
    private ar: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}
  back(){
    this.router.navigate(['/']);
  };
  ngOnInit(): void {
    let searched: string = '';
    let selectedCity;

    this.ar.params.subscribe((a) => {
      searched = a['searched'];
      selectedCity = a['selectedCity'];
    });
    this.restaurantService
      .searchRestaurants(searched, selectedCity)
      .subscribe((a) => {
        console.log(a);
        if (a.length != 0) this.RestaurantList = a;
        else alert('No Restaurants Available');
      });
    // this.userService.searchUser(searched).subscribe((a) => {
    //   this.users = a;
    // });
  }
}
