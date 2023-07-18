import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators , FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router , private formBuilder: FormBuilder){
  }

  loginForm: any;

  ngOnInit() {
    this.loginForm = new FormGroup({
      role: new  FormControl ('', Validators.required),
      email: new  FormControl ('', [Validators.required, Validators.email]),
      password: new  FormControl('', Validators.required)
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }


  saveData(){
    console.log(this.loginForm.value)
   
    if(this.loginForm.value.role == "customer"){
      this.router.navigate(['customer/selectType']);
    }else if (this.loginForm.value.role == "admin") {
      this.router.navigate(['admin/dashboard']);
    }else if (this.loginForm.value.role == "employee") {
      this.router.navigate(['employee/dashboard']);
    }else{
      return
    }
  }
}
