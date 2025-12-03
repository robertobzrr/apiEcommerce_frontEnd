import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface ProductRequestDTO {
  name: string;
  description?: string;
  price: number;
  category?: string;
}


export interface ProductResponseDTO {
  id: number;
  name: string;
  description?: string;
  price: number;
  category?: string;
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
    return this.http.get<ProductResponseDTO[]>(this.apiUrl);
  }


  findProductById(id: number): Observable<ProductResponseDTO> {
    return this.http.get<ProductResponseDTO>(`${this.apiUrl}/${id}`);
  }


  updateProductById(id: number, product: ProductRequestDTO): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, product);
  }


  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
