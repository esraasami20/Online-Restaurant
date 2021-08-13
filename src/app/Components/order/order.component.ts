import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/Model/Data.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  restaurantMenu: Restaurant | any;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.queryParamMap.subscribe(
      (params: any) => (this.restaurantMenu = JSON.parse(params.params.data))
    );
  }
}
