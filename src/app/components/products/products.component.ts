import { Component, inject } from '@angular/core';
import { ProductService, ProductResponseDTO } from '../../services/product/product.service';
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
  
  products: ProductResponseDTO[] = [];
  

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    console.log('products from database...');
    
    this.productService.findAllProducts().subscribe({
      next: (productsFromAPI) => {
        console.log('received:', productsFromAPI);
        this.products = productsFromAPI;
      },
      error: (error) => {
        console.error('error:', error);
      }
    });
  }

}
