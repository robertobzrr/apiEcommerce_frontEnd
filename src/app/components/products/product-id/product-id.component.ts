import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService, ProductResponseDTO } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-id',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-id.component.html',
  styleUrl: './product-id.component.css'
})
export class ProductIdComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  
  product: ProductResponseDTO | null = null;
  productId: number = 0;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      this.getProduct();
    });
  }

  getProduct() {
    this.productService.findProductById(this.productId).subscribe({
      next: (product) => {
        this.product = product;
      },
      error: (error) => {
        console.error('error:', error);
      }
    });
  }
}