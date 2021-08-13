import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiEndpoints } from '../Common/EndPoint';
import { Cities, Restaurant } from '../Model/Data.component';
import { OrderData } from '../Model/OrderData.component';

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
  searchRestaurants(searched: any, id: any) {
    return this.http.get<Restaurant[]>(
      `${ApiEndpoints.Endpoints.getRestaurants}/search?name=` +
        searched +
        '&&city_id=' +
        id
    );
  }

  gitCities() {
    return this.http.get<Cities[]>(`${ApiEndpoints.Endpoints.getCities}`);
  }

  addOrder(order: any) {
    console.log(order);
    return this.http.post<OrderData[]>(
      `${ApiEndpoints.Endpoints.getOrders}`,
      order
    );
  }
}
