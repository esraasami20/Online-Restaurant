import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { RestaurantsComponent } from './Components/restaurants/restaurants.component';
import { MenuComponent } from './Components/menu/menu.component';
import { OrderComponent } from './Components/order/order.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { SearchComponent } from './Components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestaurantsComponent,
    MenuComponent,
    OrderComponent,
    CheckoutComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
