import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  relatorioUrl: string;



constructor(private http: HttpClient) {
  this.relatorioUrl = `https://6537f565a543859d1bb112a7.mockapi.io/pedidos`
}

pedidos(pedido: string) {
  let params = new HttpParams();
  params = params.set('pedido', pedido);
  return firstValueFrom(
    this.http.get(`${this.relatorioUrl}/pedidos/idficha`, {
      params,
      responseType: 'blob',
    })
  ).then((response) => response);
}
}
