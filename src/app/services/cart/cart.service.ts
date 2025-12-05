import { Injectable } from '@angular/core';
import { ProductResponseDTO } from '../product/product.service';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: CartItem[] = [];

  constructor() { }

  getItems(): CartItem[] {
    return this.items;
  }

  addItem(product: ProductResponseDTO): void {
    const existingItem = this.items.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      });
    }
    

  }

  removeItem(productId: number): void {
    this.items = this.items.filter(item => item.id !== productId);
  }

  updateQuantity(productId: number, quantity: number): void {
    const item = this.items.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        this.removeItem(productId);
      }
    }
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getItemCount(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  clearCart(): void {
    this.items = [];
    console.log('cleared');
  }
}
