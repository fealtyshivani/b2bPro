import { Component } from '@angular/core';
import products from './fake-product-data'

interface product{
  asin:string
  productName:string
  sku: string
  price: number
  image:string
  description:string
  category:string
}

@Component({
  selector: 'app-select-type',
  templateUrl: './select-type.component.html',
  styleUrls: ['./select-type.component.scss']
})
export class SelectTypeComponent {

  brandName: any;
  searchBy: string;
  showSearchFiltter: boolean;
  showSearchInput: boolean;
  product:product|null;
  showMoreDesc:boolean;
  prodDesc:string;

  constructor() {
    this.prodDesc="";
    this.showMoreDesc=false;
    this.product=null,
    this.brandName = "";
    this.searchBy = "";
    this.showSearchFiltter = false;
    this.showSearchInput = false;
  }
  setBrand() {
    if (this.brandName != "")
      this.showSearchFiltter = true;
    else
      this.showSearchFiltter = false;
  }
  setSeach() {
    if (this.searchBy != "")
      this.showSearchInput = true;
    else
      this.showSearchInput = false;
  }

  seeMore(){
    this.showMoreDesc = true;
    if(this.product)
     this.prodDesc = this.product.description;

  }

  lessMore(){
    this.showMoreDesc = false;
    if(this.product)
     this.prodDesc = this.product.description.substring(0,200);

  }

  searchProduct(data:any){
    console.log(data.search)
    switch(this.searchBy){
      case "Name":
          products.map((item)=>{
            console.log(item)
            if(data.search === item.productName){
              this.product=item;
            }
          })
         break;
      case "ASIN":
        products.map((item)=>{
          if(data.search === item.asin){
            this.product=item;
          }
        })
       break;
      case "SKUs":
        products.map((item)=>{
          if(data.search === item.sku){
            this.product=item;
          }
        })
       break;
      default: this.product=null
    }    
      this.lessMore();
  }
}
