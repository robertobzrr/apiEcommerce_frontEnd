import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService, ProductResponseDTO } from '../../services/product/product.service';
import { CartService } from '../../services/cart/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  private productService = inject(ProductService);
  private cartService = inject(CartService);
  private router = inject(Router);
  
  products: ProductResponseDTO[] = [];
  

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.findAllProducts().subscribe({
      next: (productsFromAPI) => {
        this.products = productsFromAPI;
      },
      error: (error) => {
        console.error('error:', error);
      }
    });
  }

  editProduct(productId: number) {
    this.router.navigate(['/products/edit', productId]);
  }

  addToCart(product: ProductResponseDTO) {
    this.cartService.addItem(product);
    alert('Product add to cart');
  }

}
