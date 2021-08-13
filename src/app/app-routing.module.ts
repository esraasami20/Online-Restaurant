import { SearchComponent } from './Components/search/search.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { RestaurantsComponent } from './Components/restaurants/restaurants.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './Components/menu/menu.component';
import { OrderComponent } from './Components/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantsComponent,
  },
  {
    path: 'Restaurant-Menu',
    component: MenuComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'search/:searched',
    component:SearchComponent,
  },
  // {
  //   path: '**',
  //   component: RestaurantsComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
