import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


export interface ProductRequestDTO {
  name: string;
  description?: string;
  price: number;
}


export interface ProductResponseDTO {
  id: number;
  name: string;
  description?: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/products';
  
  constructor() { }


  createProduct(product: ProductRequestDTO): Observable<void> {
    return this.http.post<void>(this.apiUrl, product);
  }


  findAllProducts(): Observable<ProductResponseDTO[]> {
    console.log('products from DB');
    return this.http.get<ProductResponseDTO[]>(this.apiUrl).pipe(
      tap(products => console.log('received:', products))
    );
  }


  findProductById(id: number): Observable<ProductResponseDTO> {
    console.log(`Loading product with ID: ${id}`);
    return this.http.get<ProductResponseDTO>(`${this.apiUrl}/${id}`).pipe(
      tap(product => console.log('Product loaded:', product))
    );
  }


  updateProductById(id: number, product: ProductRequestDTO): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, product);
  }


  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
