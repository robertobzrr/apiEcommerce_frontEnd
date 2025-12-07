import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CartService } from '../../services/cart/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  private cartService = inject(CartService);
  cartItemCount: number = 0;

  ngOnInit() {
    this.updateCartCount();

    setInterval(() => {
      this.updateCartCount();
    }, 1000);
  }

  updateCartCount() {
    this.cartItemCount = this.cartService.getItemCount();
  }

}
