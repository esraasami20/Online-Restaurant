import { OrderData } from './../../Model/OrderData.component';
import { RestaurantService } from './../../Service/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu, Restaurant } from 'src/app/Model/Data.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  restaurantMenu: Restaurant | any;
  orders: Menu[] = [];
  

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private restService: RestaurantService
  ) {}

  ngOnInit(): void {
    this.router.queryParamMap.subscribe(
      (params: any) => (this.restaurantMenu = JSON.parse(params.params.data))
    );
    // console.log( this.orders);
    this.orders = JSON.parse(localStorage.getItem('orders') || '{}');
  }
  confirm(name: any, number: any, email: any, address: any) {
   var userData: OrderData = {
     customer_Email: email,
     customer_Name: name,
     customer_Phone: number,
     customer_Address: address,
     menus:this.orders
   };
    this.restService.addOrder(userData).subscribe((a) => {
      console.log(a);
    });

    localStorage.setItem('customer_Name', JSON.stringify(name));
    localStorage.setItem('customer_Email', JSON.stringify(email));
    localStorage.setItem('customer_Phone', JSON.stringify(number));
    localStorage.setItem('customer_Address', JSON.stringify(address));
    localStorage.setItem('Order', JSON.stringify(userData));

    this.route.navigate(['/checkout']);
  }
  back() {
    this.route.navigate(['/']);
  }
}
