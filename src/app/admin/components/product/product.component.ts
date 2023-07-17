import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  showFilter : boolean = false
  constructor(){
  }

  showFilters(){
   this.showFilter = true
  }
  hideFilters(){
    this.showFilter = false
  }
}
