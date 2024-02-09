import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { NavbarComponent } from '../../units/navbar/navbar.component';
import { FooterComponent } from '../../units/footer/footer.component';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,SlicePipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  title = 'Nest day 5';
  data: any = []
  constructor(public api:ApiService){}
  ngOnInit(){
    this.api.getData().subscribe(response=>{
      this.data = response
    })
  }
}
