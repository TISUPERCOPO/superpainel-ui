import { Injectable } from '@angular/core';
import { FiltrosPedido } from '../models/filtro.model';

@Injectable({
  providedIn: 'root'
})
export class FiltroPedidoService {

  constructor() { }

  async filtro(value: any, oldFiltro: FiltrosPedido): Promise<FiltrosPedido> {
    let filtro = new FiltrosPedido();

    filtro = { ...oldFiltro };

    filtro.pagina = 0;
    filtro.itensPorPagina = 10;

    if (value.field === 'id') {
      filtro.id = value.qty;
    }
    if (value.field === 'valor') {
      filtro.valor = value.qty;
    }
    if (value.field === 'frete') {
      filtro.frete = value.qty;
    }
    if (value.field === 'nome') {
      filtro.nome = value.qty;
    }
    if (value.field === 'transportadora') {
      filtro.transportadora = value.qty;
    }
    if (value.field === 'status') {
      filtro.status = value.qty;
    }
    if (value.field === 'statuspedido') {
      filtro.statuspedido = value.qty;
    }
    return filtro;
  }

}
