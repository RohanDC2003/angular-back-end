import { Component } from '@angular/core';
import { NavbarComponent } from '../../units/navbar/navbar.component';
import { FooterComponent } from '../../units/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
