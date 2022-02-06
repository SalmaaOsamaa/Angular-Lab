import { Injectable } from '@angular/core';
import {Iproduct} from '../SharedClassesandtypes/Iproducts';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  getProducts(): Iproduct[]{
    return [
      {
        ID: 1,
        name:'The catcher in the rye',
        Quantity:20,
        price:50,
        Img:"../../assets/images/81OthjkJBuL.jpg",

      } ,
      {
        ID:2,
        name:'Torn',
        Quantity:30,
        price:120,
        Img:"../../assets/images/sad-romance-kindle-book-cover-flyer-template-539b5fdf2dd2f6602c25ce81fbb5d877_screen.jpg",
      }
    ];
  }
  constructor() { }
}
