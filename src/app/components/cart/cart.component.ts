import { Component, inject, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../services/cart/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  private cartService = inject(CartService);
  
  cartItems: CartItem[] = [];
  totalPrice: number = 0;

  ngOnInit(){
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartItems = this.cartService.getItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  removeFromCart(productId: number) {
    this.cartService.removeItem(productId);
    this.loadCartItems();
  }

  updateQuantity(productId: number, quantity: number) {
    this.cartService.updateQuantity(productId, quantity);
    this.loadCartItems();
  }

  checkout() {
    if (this.cartItems.length === 0) {
      alert('cart empty');
      return;
    }
    
    alert(`Cart finished! Total: R$ ${this.totalPrice.toFixed(2)}`);
    this.cartService.clearCart();
    this.loadCartItems();
  }

}
