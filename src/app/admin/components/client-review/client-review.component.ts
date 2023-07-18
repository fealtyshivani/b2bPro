import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-client-review',
  templateUrl: './client-review.component.html',
  styleUrls: ['./client-review.component.scss']
})
export class ClientReviewComponent implements OnInit {
  dtoptions : DataTables.Settings = {};
  dtTrigger : Subject<any> = new Subject<any>();

  constructor(private router: Router){}

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

  invoice(){
    this.router.navigate(['/admin/invoice']);
  }
}
