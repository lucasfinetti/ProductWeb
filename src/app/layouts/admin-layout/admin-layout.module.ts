import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { ProductsComponent } from '../../pages/products/products.component';
import { ProductComponent } from '../../pages/products/product/product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask'

import { ProductService } from '../../services/products.service';
import { MessageService } from 'primeng/api';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  providers: [
    ProductService,
    MessageService
  ]
})

export class AdminLayoutModule {}
