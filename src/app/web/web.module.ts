import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FooterModule } from '../shared/components/footer/footer.module';
import { HeaderModule } from '../shared/components/header/header.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    FooterModule,
    HeaderModule
  ]
})
export class WebModule { }
