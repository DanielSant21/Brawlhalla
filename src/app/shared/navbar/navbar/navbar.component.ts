import { APIBrawlhallaService } from './../../services/api-brawlhalla.service';
import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatSlideToggleModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

valorID: any;

    constructor(private API: APIBrawlhallaService){}


    chamarAPI(id: string): void {
      this.API.chamarAPI(id).subscribe(
        (data: any) => {
          console.log('Dados recebidos:', data);
        },
        (error: any) => {
          console.error('Erro ao chamar a API:', error);
        }
      );
      console.log('ID Brawlhalla: '+ id);
    }

}
