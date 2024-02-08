import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nest day4';
  data: any = []
  constructor(public api:ApiService){}
  ngOnInit(){
    this.api.getData().subscribe(response=>{
      this.data = response
    })
  }
}
