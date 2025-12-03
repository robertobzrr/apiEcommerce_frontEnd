import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  private itens = [
    { id: 1, name: 'Product A', quantity: 2, price: 10.0 },
    { id: 2, name: 'Product B', quantity: 1, price: 20.0 },
    { id: 3, name: 'Product C', quantity: 3, price: 15.0 }
  ]


  constructor() { }

  getItems() {
    return this.itens;
  }

  addItens(){
    //TODO
  }

  removeItens(){
    //TODO
  }
  


}
