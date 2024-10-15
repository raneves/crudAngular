import { RouterLink, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { MatList, MatListModule, MatNavList } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from '../../../views/home/home.component';
import {MatCardModule} from '@angular/material/card';

import { ProductCrudComponent } from '../../../views/product-crud/product-crud.component';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, HomeComponent, MatCardModule, ProductCrudComponent, RouterOutlet, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
