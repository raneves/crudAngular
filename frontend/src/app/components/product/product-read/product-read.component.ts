import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule, CurrencyPipe, registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';


import locatePt from '@angular/common/locales/pt';
import { RouterModule } from '@angular/router';
registerLocaleData(locatePt)

@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [MatTableModule, CurrencyPipe, CommonModule, RouterModule],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css',
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class ProductReadComponent implements OnInit{

  products: Product[];
  displayedColumns: string[] = ['id', 'name', 'price', 'action']; // Inicializando displayedColumns
 

  constructor(private productService : ProductService) {
    this.products = []; // Inicializando como um array vazio    
  }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
      console.log(products);
    })
  }  
}
