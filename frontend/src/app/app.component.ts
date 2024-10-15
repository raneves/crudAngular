import { NavComponent } from './components/template/nav/nav.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/template/header/header.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';




@Component({
  selector: 'app-root',
  standalone: true,  
  templateUrl: 'app.component.html',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NavComponent, MatSidenavModule, MatListModule],
})
export class AppComponent {
  title = 'frontend';
}
