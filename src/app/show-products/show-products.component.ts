import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {

  constructor(private mainService:MainService) { }
  products = [];

  ngOnInit(): void {
    this.mainService.getProducts()
    .then((res)=>{
      this.products = res.data;
    })
  }
  removeProduct(product){
    this.mainService.removeProduct(product)
    .then((res)=>{
      if(res.data.deletedCount>0){
        this.products = this.products.filter((prod)=>{
          if(prod.title!=product.title){
            return prod
          }
        })
      }
    })
  }
}
