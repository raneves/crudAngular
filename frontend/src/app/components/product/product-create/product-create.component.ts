import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../product.model';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
 

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [MatSnackBarModule, MatButtonModule, HttpClientModule, FormsModule, MatFormFieldModule,
    MatInputModule, MatCardModule
  ],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit{

  propLegal = "qualquer";
  product : Product = {
    name : '',
    price: null
  }

  constructor(private productService: ProductService, private router : Router) {}

  ngOnInit(): void {
    this.productService.showOnConsole("@@@@@  teste");    
  }

  fazerAlgo(): void {
    console.log('Fazendo algo.....');
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe (() =>{
        this.productService.showMessage("Produto criado com sucesso....!!!!!!!!!");
        this.router.navigate(['products']);
      }
    );
    this.productService.showOnConsole("Produto criado com sucesso....!!!!!!!!!");
    
  }

  cancel(): void {
    this.router.navigate(['products']);
  }  
}