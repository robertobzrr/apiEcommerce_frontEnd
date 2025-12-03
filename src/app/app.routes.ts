import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';      
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';

import { RegisterAccountComponent } from './components/register/register-account/register-account.component';
import { RegisterProductComponent } from './components/register/register-product/register-product.component';
import { AccountsComponent } from './components/accounts/accounts.component';


export const routes: Routes = [
    { path: 'products', component: ProductsComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'register/account', component: RegisterAccountComponent },
    { path: 'register/product', component: RegisterProductComponent },
    { path: 'cart', component: CartComponent },
    { path: 'accounts', component: AccountsComponent }






];
