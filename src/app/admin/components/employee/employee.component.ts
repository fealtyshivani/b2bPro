import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  dtoptions : DataTables.Settings = {};
  dtTrigger : Subject<any> = new Subject<any>();

  constructor(private router : Router){ }

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

  addemp(){
    this.router.navigate(['admin/addemp']);
  }
}
