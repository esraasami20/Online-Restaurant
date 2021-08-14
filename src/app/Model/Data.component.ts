
export interface Cities {
  city_Id: number;
  city_Name: string;
  isdeleted: boolean;
  restaurants: any[];
}


export interface Menu {
  menu_Id: number;
  menu_Title: string;
  description: string;
  price: number;
  Quantity:number;
  img: string;
  ischecked: boolean;
  isdeleted: boolean;
  restaurant_Id: number;
  orderItems?: any;
}


 export interface Restaurant {
   restaurant_Id: number;
   restaurant_Name: string;
   description: string;
   restaurantImg: string;
   isdeleted: boolean;
   city_Id: number;
   cities: Cities;
   menus: Menu[];
 }

export interface Customers {
  customer_Id: number;
  customer_Name: string;
  customer_Phone: number;
  customer_Email: string;
  customer_Address: string;
}

 export interface Order {
   Order_Id: number;
   Order_Date: Date;
   Total_Price: number;
   Quantity: number;
   isdeleted: boolean;
   customer_Id: number;
   Customers: Customers;
 }
