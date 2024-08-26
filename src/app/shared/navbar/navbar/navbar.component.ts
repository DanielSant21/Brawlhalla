import { APIBrawlhallaService } from './../../services/api-brawlhalla.service';
import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { ApiResponse } from '../../Interfaces/apiResponse';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatSlideToggleModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

valorID: any;
resultado!: ApiResponse;
iD!: string;
nome = "";
clan = "";
lendas = "";

    constructor(private API: APIBrawlhallaService){}


    chamarAPI(id: string): void {
      this.API.chamarAPI(id).subscribe(
        (resposta: ApiResponse) => {
          console.log('Dados recebidos:', resposta)

          
          this.resultado = (resposta);
          this.lendas = JSON.stringify(Object.values(resposta.data.legends).map(legend => legend.legend_name_key));
          this.iD = resposta.data.brawlhalla_id;
          this.nome =resposta.data.name;
          this.clan =resposta.data.clan!.clan_name;

        },
        (error: any) => {
          console.error('Erro ao chamar a API:', error);
        }
      );
      console.log('ID Brawlhalla: '+ id);
    }

}
