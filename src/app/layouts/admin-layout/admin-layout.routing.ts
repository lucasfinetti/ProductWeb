import { Routes } from '@angular/router';

import { ProductsComponent } from '../../pages/products/products.component';
import { ProductComponent } from '../../pages/products/product/product.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'products',         component: ProductsComponent },
    { path: 'product',          component: ProductComponent },
    { path: 'product/:id',      component: ProductComponent }
];
