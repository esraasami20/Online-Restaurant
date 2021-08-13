
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
