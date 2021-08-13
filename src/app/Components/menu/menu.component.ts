import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/Model/Data.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  restaurantMenu: Restaurant | any;

  constructor(private router: ActivatedRoute, private route: Router) {}
  ckeckbtn = document.getElementById('ckeckbtn');
  ngOnInit(): void {
    this.router.queryParamMap.subscribe(
      (params: any) => (this.restaurantMenu = JSON.parse(params.params.data))
    );
  }
  NavigateToOrderComponent(item: Restaurant) {
    this.route.navigate(['/order'], {
      queryParams: { data: JSON.stringify(item) },
    });
  }
}
