import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  
  
  name: string = '';
  description: string = '';
  price: number = 0;


  cartService = inject(CartService);

  constructor() { 


    console.log('REGISTER INIATIALIZED');
  }

  ngOnInit(){
    console.log('REGISTER ngOnInit CALLED');
    console.log('Cart Items:', this.cartService.getItems());
  }  

  ngOnChanges(){
    console.log('REGISTER ngOnChanges CALLED');
  }

  ngAfterViewInit(){
    console.log('REGISTER ngAfterViewInit CALLED');
  }

}
