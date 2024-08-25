import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient

@Injectable({
  providedIn: 'root'
})
export class APIBrawlhallaService {

  constructor(private http: HttpClient) { };

  pathAPI = 'https://brawlhalla.fly.dev/v1/stats/id?brawlhalla_id=';


  chamarAPI(id: string): Observable<any> {
    return this.http.get<any>(`${this.pathAPI}${id}`);
  }

  pegaDadosAPI(dados: Observable<any>){
    
  }

  testaService(){
    console.log(`SERVICE FUNCIONANDO!`);
  }

}
