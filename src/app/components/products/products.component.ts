import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService, ProductResponseDTO } from '../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  private productService = inject(ProductService);
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

  viewProduct(productId: number) {
    alert(`Clicked on product ID: ${productId}`);
    console.log('viewProduct called with ID:', productId);
    console.log('Attempting to navigate to:', `/products/${productId}`);
    this.router.navigate(['/products', productId]);
  }

}
