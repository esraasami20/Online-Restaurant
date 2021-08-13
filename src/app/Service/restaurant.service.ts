import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiEndpoints } from '../Common/EndPoint';
import { Restaurant } from '../Model/Data.component';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  getRestaurants() {
    return this.http.get<Restaurant[]>(
      `${ApiEndpoints.Endpoints.getRestaurants}`
    );
  }
  searchRestaurants(searched: any) {
    return this.http.get<Restaurant[]>(
      `${ApiEndpoints.Endpoints.getRestaurants}/search` + searched
    );
  }
}
