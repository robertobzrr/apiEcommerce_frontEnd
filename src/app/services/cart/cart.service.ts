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
  private readonly CART_STORAGE_KEY = 'cartkey';

  constructor() { 
    this.loadCartFromLocalStorage();
  }

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
    
    this.saveToLocalStorage();
  }

  removeItem(productId: number): void {
    this.items = this.items.filter(item => item.id !== productId);
    this.saveToLocalStorage();
  }

  updateQuantity(productId: number, quantity: number): void {
    const item = this.items.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        this.removeItem(productId);
      } else {
        this.saveToLocalStorage();
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
    this.saveToLocalStorage();
    console.log('Cart cleared');
  }

  private loadCartFromLocalStorage(): void {
    try {
      const savedCart = localStorage.getItem(this.CART_STORAGE_KEY);
      if (savedCart) {
        this.items = JSON.parse(savedCart);
        console.log('localStorage:', this.items);
      }
    } catch (error) {}
  }

  private saveToLocalStorage(): void {
    try {
      localStorage.setItem(this.CART_STORAGE_KEY, JSON.stringify(this.items));
    } catch (error) {}
  }

  private exposeCartToWindow(): void {
    if (typeof window !== 'undefined') {
      (window as any).cartItems = this.items;
      (window as any).cartCount = this.getItemCount();
      (window as any).cartTotal = this.getTotalPrice();
    }
  }
}
