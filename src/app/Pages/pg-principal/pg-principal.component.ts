import { Component } from '@angular/core';
import { TabelaResumoComponent } from '../componentes/tabela-resumo/tabela-resumo.component';

@Component({
  selector: 'app-pg-principal',
  standalone: true,
  imports: [TabelaResumoComponent],
  templateUrl: './pg-principal.component.html',
  styleUrl: './pg-principal.component.scss'
})
export class PgPrincipalComponent {

}
