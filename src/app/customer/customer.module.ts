import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { SelectTypeComponent } from './components/select-type/select-type.component';
import { FormsModule } from '@angular/forms';
import { FooterModule } from '../shared/components/footer/footer.module';
import { HeaderModule } from '../shared/components/header/header.module';

@NgModule({
  declarations: [
    SelectTypeComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    FooterModule,
    HeaderModule
  ]
})
export class CustomerModule { }
