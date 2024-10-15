import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [MatSnackBarModule, MatButtonModule, HttpClientModule, FormsModule, MatFormFieldModule,
    MatInputModule, MatCardModule
  ],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent {
  product : Product = {
    name : '',
    price: null
  }
  constructor(private productService: ProductService, private router : Router,
           private route: ActivatedRoute) {

   }
   ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';    
    this.productService.readById(id).subscribe({
      next: (product: Product) => {
          this.product = product;
      },      
    });
   }
   deleteProduct(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.productService.delete(id).subscribe (() =>{
        this.productService.showMessage("Produto removido com sucesso....!!!!!!!!!");
        this.router.navigate(['products']);
      }
    );   
  }
  cancel(): void {
    this.router.navigate(['products']);
  }
}
