import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Pedido } from 'src/app/core/models/pedidos.model';


@Injectable({
  providedIn: 'root'
})
export class PainelService {
  pedidoURl: string;


  constructor(private http: HttpClient) {

    this.pedidoURl = `https://6537f565a543859d1bb112a7.mockapi.io/pedidos`


   }



   listarPedidos(): Promise<any> {
    return firstValueFrom(
      this.http.get(`${this.pedidoURl}`)).then((response) => {
        const obj = response as any[];
       // this.converterStringDate(obj);
        return obj;
      })

  }


  AlternarLista(valor: string): Promise<any> {
    return firstValueFrom(
      this.http.get(`${this.pedidoURl}${valor}`)
    ).then((response) => response as Pedido);

  }

  buscarPorId(status: boolean) {
    return firstValueFrom(this.http.get(`${this.pedidoURl}/${status}`)).then(
      (response) => response as Pedido
    );
  }


  mudarStatus(id: number, status: boolean): Promise<void> {
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );
    return firstValueFrom(
      this.http.put(`${this.pedidoURl}/${id}/status`, status, { headers })
    ).then(() => null);
  }

}
