import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { Paginator } from 'primeng/paginator';
import { Table } from 'primeng/table';
import { PainelService } from '../painel.service';
import { Pedido } from 'src/app/core/models/pedidos.model';

@Component({
  selector: 'app-painelpedido-lista',
  templateUrl: './painelpedido-lista.component.html',
  styleUrls: ['./painelpedido-lista.component.css']
})
export class PainelpedidoListaComponent implements OnInit {
   //@ViewChild('tabela', { static: true }) table: Table;

  @ViewChild('tabela') table: Table;
  //@ViewChild('paginator') paginator: Paginator;
  //@ViewChild('buttonFilter') buttonFilter: ElementRef;


  pedidos = new  Array<Pedido>()

  rowsPerPageTable: number[] = [10, 25, 50, 100, 200];
  //rangeDates: Date[];
  atendimentos = [];
  cols = [];
  colsItens = [];
  sinal = true;
  //dateRangeStart: string;
  //dateRangeEnd: string;
  //restoringFilter: boolean;
  status = 'Ativo';
  messageDrop = 'Nenhum resultado encontrado...';
  valorTooltip = 'Inativos';
 // displayExames: boolean;
  messagePageReport = 'Mostrando {first} a {last} de {totalRecords} registros';
  items: MenuItem[];
  selectedAtendimento: any;
  rangeDatesFiltroDataNasc: Date[];
  rangeDatesFiltroGravacao: Date[];
  totalRegistros = 0;
  totalPages = 0;
  first = 1;
  //filtro = new FiltrosAtendimentos();
  timeout: any;
  datanascde: string;
  datanascate: string;
  datalancamentode: string;
  datalancamentoate: string;
  blockBtnFilter = false;

  constructor(
    private title: Title,
    private painelService: PainelService,
    //private errorHandler: ErrorHandlerService,
    //private filterService: FilterService,
    //public auth: AuthService,
    private conf: PrimeNGConfig,
    private spinner: NgxSpinnerService,
  ) { }
  ngOnInit(): void {
    //this.filtroDefault();
    this.conf.ripple = true;
    this.title.setTitle('Pedidos');

    this.items = [
      {
        label: 'Ativo / Inativo',
        icon: 'pi pi-sort-alt',
        command: () => {
          this.AlternarList();
        },
      }
    ]
    this.carregarPedidos()


    this.cols = [
      { field: 'id', header: 'Codigo', width: '50px', type: 'numeric', key: 1 },
      { field: 'pedido', header: 'Pedido', width: '150px', type: 'numeric', key: 2 },
      { field: 'name', header: 'Cliente', width: '150px', type: 'text', key: 3 },
      { field: 'datapedido', header: 'Data Pedido', width: '150px', data: true, format: 'dd/MM/yyyy H:mm', type: 'date', key: 4 },
      { field: 'valor', header: 'Valor Mercadoria', width: '150px', type: 'numeric', key: 5 },
 /*      { field: 'status', header: 'Status', width: '150px', type: 'text', key: 6 } */

    ]/* ;
    this.colsItens = [
      { field: 'acesso', header: 'Acesso' },
      { field: 'descricaoexame', header: 'Exame' },
      { field: 'descricaoconvenio', header: 'Convênio' },
      { field: 'dataatendimento', header: 'Data Atendimento', data: true, format: `dd/MM/yyyy` },
      { field: 'preco', header: 'Preço', currency: true, format: `BRL` },
      { field: 'desconto', header: 'Desconto', currency: true, format: `BRL` },
      { field: 'total', header: 'Total', currency: true, format: `BRL` }
    ]; */
/*
    this.filterService.register('customCreatedDateFilter', (value: string, filter) => {

      if (this.dateRangeStart === value && this.dateRangeEnd === undefined) {
        return true;
      }

      if (this.dateRangeStart === value || this.dateRangeEnd === value) {
        return true;
      }

      if (
        this.dateRangeStart !== undefined &&
        this.dateRangeEnd !== undefined &&
        moment(this.dateRangeStart).isBefore(value) &&
        moment(this.dateRangeEnd).isAfter(value)) {
        return true;
      }

      return false;
    }); */

    //  this.carregarAtendimentos();
    // this.carregarUsers();



  }



  carregarPedidos() {
    this.spinner.show()
    this.painelService.listarPedidos().then((obj) => {
      this.pedidos = obj
      //this.convenios = this.validationService.formataAtivoeInativo(this.convenios)
      this.spinner.hide()
    })
      .catch((erro) => {
        this.spinner.hide()
        //   this.erroHandler.handle(erro)
      })
  }



  AlternarList() {
    this.spinner.show()
    const valor = this.sinal ? '/status' : '/'
    if (this.sinal === true) {
      this.valorTooltip = 'Ativos'
      this.sinal = false
    } else {
      this.valorTooltip = 'Inativos'
      this.sinal = true
    }

    this.painelService.AlternarLista(valor).then((obj) => {
      this.pedidos = obj
      //this.pedidos = this.validationService.formataAtivoeInativo(this.convenios)
      this.spinner.hide()
    })
    .catch((erro) => {
      this.spinner.hide()
      //   this.erroHandler.handle(erro)
    })

  }


  refresh(){
    this.carregarPedidos();
  }


}
