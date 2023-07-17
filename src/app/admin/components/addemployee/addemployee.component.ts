import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent {
  myForm :any

  constructor(private route : Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      salary: new FormControl('',[Validators.required , Validators.pattern('^[0-9]{10}$')]),
      department: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      joiningDate: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    });
  }

  get formControls() {
    return this.myForm.controls;
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
    this.route.navigate(['/admin/employee'])

  }
}
