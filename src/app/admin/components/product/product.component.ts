import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  dtoptions : DataTables.Settings = {};
  dtTrigger : Subject<any> = new Subject<any>();

  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'simple_numbers',
      pageLength: 5,
      searching: false,
      info: true,
      'dom': 'frtip',
      language: {
        searchPlaceholder: "Search",
      }
      // processing: true,
      // ordering: false
    };

    // this.dtTrigger.next(null);
  }
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
