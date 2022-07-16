import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:any =[];
  allProducts:number =0;
  constructor(private cartApi:CartapiService) { }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res => {
      this.products = res;
      this.allProducts = this.cartApi.getTotalAmount();
    })
  }
  removeProducts(item:any) {
    this.cartApi.removeCardData(item);
  }
  removeAllProduct() {
    this.cartApi.removeAllCart();
  }

}
