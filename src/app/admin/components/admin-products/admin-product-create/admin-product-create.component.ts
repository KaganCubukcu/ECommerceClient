import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../../services/common/product/product.service';
import { Product } from '../../../../interfaces/Product.interface';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-admin-product-create',
  imports: [MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './admin-product-create.component.html',
  styleUrl: './admin-product-create.component.css'
})
export class AdminProductCreateComponent implements OnInit {
  constructor(private productService: ProductService, private spinner: NgxSpinnerService) { }

  createProductForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    stock: new FormControl(0, [Validators.required, Validators.min(0)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
  });

  ngOnInit(): void {

  }

  createProduct() {
    this.spinner.show();
    const product: Product = {
      name: this.createProductForm.value.name!,
      stock: this.createProductForm.value.stock!,
      price: this.createProductForm.value.price!
    };
    this.productService.createProduct(product, () => this.spinner.hide())
  }
}
