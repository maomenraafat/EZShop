import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './shared/services/flowbite/flowbite.service';
import { NavbarComponent } from './core/layout/navbar/navbar/navbar.component';
import { FooterComponent } from './core/layout/footer/footer/footer.component';
import { NgxSpinnerComponent } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    NgxSpinnerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'EZShop';
  _flowbiteService: FlowbiteService = inject(FlowbiteService);

  ngOnInit(): void {
    this._flowbiteService.loadFlowbite((flowbite) => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }
}
