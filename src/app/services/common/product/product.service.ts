import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Product } from '../../../interfaces/Product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService: HttpClientService) { }

  createProduct(product: Product, successCallBack: any) {
    this.httpClientService.post({
      controller: "products"
    },
      product
    ).subscribe({
      next: (result) => {
        successCallBack();
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }
}
