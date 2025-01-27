import { Component, OnInit } from '@angular/core';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
import { Product } from '../../../interfaces/Product.interface';

@Component({
  selector: 'app-home',
  imports: [NgxSpinnerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private httpClientService: HttpClientService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
  }
}
