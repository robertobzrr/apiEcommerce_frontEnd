import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';      
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    { path: 'products', component: ProductsComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'cart', component: CartComponent }

];
