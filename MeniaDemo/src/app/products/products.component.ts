import { Component, OnInit } from '@angular/core';
import {DiscountOffers} from '../../app/SharedClassesandtypes/discountOffers';
import {Icategory} from '../../app/SharedClassesandtypes/Icategory';
import {Iproduct} from '../../app/SharedClassesandtypes/Iproducts';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 discount :DiscountOffers;
 storeName :string;
 storeLogo :string;
 productList :Iproduct[];
 categoryList :Icategory[];
 clientName :string;
 isPurchased :boolean;

  constructor() { 
    this.discount=DiscountOffers.tenPercent;
    this.storeName='OxfordLibrary';
    this.storeLogo='OX';
    this.productList = [
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
    this.categoryList=[
      {
        ID:1,
        name:'Books',
      }
    ];

    this.clientName='salma';
    this.isPurchased=false;
  }
  


  ngOnInit(): void {
  }
  onPurchase(){
    
    this.isPurchased!=this.isPurchased;
    
  }

}
