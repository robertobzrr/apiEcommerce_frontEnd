import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, ProductRequestDTO, ProductResponseDTO } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productService = inject(ProductService);
  
  product: ProductRequestDTO = {
    name: '',
    description: '',
    price: 0
  };
  
  productId: number = 0;
  isLoading: boolean = true;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      this.loadProduct();
    });
  }

  loadProduct() {
    this.productService.findProductById(this.productId).subscribe({
      next: (product) => {
        this.product = {
          name: product.name,
          description: product.description || '',
          price: product.price
        };
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading product:', error);
        this.isLoading = false;
      }
    });
  }

  onSubmit() {
    this.productService.updateProductById(this.productId, this.product).subscribe({
      next: () => {
        this.router.navigate(['/products']);
      },
      error: (error) => {
        console.error('Error updating product:', error);
      }
    });
  }

  cancel() {
    this.router.navigate(['/products']);
  }
}