import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService, ProductRequestDTO } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register-product.component.html',
  styleUrl: './register-product.component.css'
})
export class RegisterProductComponent {

  private productService = inject(ProductService);

  product = {
    name: '',
    description: '',
    price: 0
  };

  message = '';
  isCreating = false;

  onSubmit() {
    if (!this.product.name || this.product.price <= 0) {
      this.message = 'enter all boxs';
      return;
    }

    this.isCreating = true;
    this.message = '';
    this.productService.createProduct(this.product).subscribe({
      next: () => {
        this.message = 'created';
        this.isCreating = false;
        this.product = { name: '', description: '', price: 0 };
      },
      error: (error) => {
        this.message = 'error';
        this.isCreating = false;
        console.error('Error:', error);
      }
    });
  }
}
