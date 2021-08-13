import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu, Restaurant } from 'src/app/Model/Data.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  restaurantMenu: Restaurant | any;
  OrderedMenu: Menu[] = [];

  constructor(private router: ActivatedRoute, private route: Router) {}
  ngOnInit(): void {
    this.router.queryParamMap.subscribe((params: any) => {
      this.restaurantMenu = JSON.parse(params.params.data);
      // this.OrderedMenu=this.restaurantMenu.menus
    });
  }
  back() {
    this.route.navigate(['/']);
  }
  NavigateToOrderComponent(item: Restaurant) {
    this.route.navigate(['/order'], {
      queryParams: { data: JSON.stringify(item) },
    });
    if (this.OrderedMenu.length > 0) {
      localStorage.setItem('orders', JSON.stringify(this.OrderedMenu));
    }
  }
  getChecks(event: any, Order: Menu) {
    if (event.target.checked) {
      this.OrderedMenu.push(Order);
    } else {
      this.OrderedMenu.splice(this.OrderedMenu.indexOf(Order), 1);
    }

    console.log(this.OrderedMenu);
    // this.OrderedMenu;
  }
}
