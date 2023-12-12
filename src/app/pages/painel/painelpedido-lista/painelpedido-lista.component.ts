import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { FilterService, MenuItem, PrimeNGConfig } from 'primeng/api';
import { Paginator } from 'primeng/paginator';
import { Table } from 'primeng/table';
import { PainelService } from '../painel.service';
import { Pedido } from 'src/app/core/models/pedidos.model';
import { FiltrosPedido } from 'src/app/core/models/filtro.model';
import { FiltroPedidoService } from 'src/app/core/filtro/filtro-pedido.service';
import * as moment from 'moment';
import { RelatorioService } from '../../relatorios/relatorio.service';

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
  rangeDates: Date[];
  cols = [];
  colsItens = [];
  sinal = true;
  dateRangeStart: string;
  dateRangeEnd: string;
  restoringFilter: boolean;
  status = 'Ativo';
  messageDrop = 'Nenhum resultado encontrado...';
  valorTooltip = 'Inativos';
  displayExames: boolean;
  messagePageReport = 'Mostrando {first} a {last} de {totalRecords} registros';
  items: MenuItem[];
  selectedAtendimento: any;
  rangeDatesFiltroDataNasc: Date[];
  rangeDatesFiltroGravacao: Date[];
  totalRegistros = 0;
  totalPages = 0;
  first = 1;
  filtro = new FiltrosPedido();
  timeout: any;
  datapedidode: string;
  datapedidoate: string;
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
    private filtroPedido: FiltroPedidoService,
    private filterService: FilterService,
    private relatorioService: RelatorioService
  ) { }
  ngOnInit(): void {
    //this.filtroDefault();
    this.conf.ripple = true;
    this.title.setTitle('Pedidos');

    this.items = [
      {
        label: 'Faturado / Pendente',
        icon: 'pi pi-sort-alt',
        command: () => {
          this.AlternarList();
        },
      }
    ]
    this.carregarPedidos()


    this.cols = [
      { field: 'pedido', header: 'Pedido', width: '50px', type: 'numeric', key: 1 },
      { field: 'datapedido', header: 'Data Pedido', width: '150px', data: true, format: 'dd/MM/yyyy H:mm', type: 'date', key: 2 },
      { field: 'transportadora', header: 'Transportadora', width: '150px', type: 'text', key: 3},
      { field: 'valor', header: 'Valor Mercadoria', width: '150px', currency: true, format: `BRL`,  type: 'numeric', key: 4 },
      { field: 'frete', header: 'Frete', width: '150px',currency: true, format: `BRL`, type: 'numeric', key: 5 },
      { field: 'statuspedido', header: 'Status Pedido', width: '150px', type: 'text', key: 6 },
      { field: 'plataforma', header: 'Plataforma', width: '150px', type: 'text', key: 7},
 /*      { field: 'status', header: 'Status', width: '150px', type: 'text', key: 6 } */
] ;
    this.colsItens = [
      { field: 'datapedido', header: 'Data Atendimento', data: true, format: `dd/MM/yyyy` },
      { field: 'valor', header: 'Valor Mercadoria', currency: true, format: `BRL` },
      { field: 'frete', header: 'Frete', currency: true, format: `BRL` },
    ];

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
    });

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
      this.valorTooltip = 'Faturado'
      this.sinal = false
    } else {
      this.valorTooltip = 'Pendente'
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


  searchData(tipo: string) {
    if (tipo === 'datapedidode') {
      if (this.datapedidode && this.datapedidode.length === 10) {
        const dia = this.datapedidode.substring(0, 2);
        const mes = this.datapedidode.substring(3, 5);
        const ano = this.datapedidode.substring(6, 10);
        this.filtro.datapedidode = ano + '-' + mes + '-' + dia;
      } else {
        this.filtro.datapedidode = '';
      }
    }
    if (tipo === 'datapedidoate') {
      if (this.datapedidoate && this.datapedidoate.length === 10) {
        const dia = this.datapedidoate.substring(0, 2);
        const mes = this.datapedidoate.substring(3, 5);
        const ano = this.datapedidoate.substring(6, 10);
        this.filtro.datapedidoate = ano + '-' + mes + '-' + dia;
      } else {
        this.filtro.datapedidoate = '';
      }
    }
    /* if (tipo === 'datalancamentode') {
      if (this.datalancamentode && this.datalancamentode.length === 10) {
        const dia = this.datalancamentode.substring(0, 2);
        const mes = this.datalancamentode.substring(3, 5);
        const ano = this.datalancamentode.substring(6, 10);
        this.filtro.datalancamentode = ano + '-' + mes + '-' + dia;
      } else {
        this.filtro.datalancamentode = '';
      }
    }
    if (tipo === 'datalancamentoate') {
      if (this.datalancamentoate && this.datalancamentoate.length === 10) {
        const dia = this.datalancamentoate.substring(0, 2);
        const mes = this.datalancamentoate.substring(3, 5);
        const ano = this.datalancamentoate.substring(6, 10);
        this.filtro.datalancamentoate = ano + '-' + mes + '-' + dia;
      } else {
        this.filtro.datalancamentoate = '';
      }
    } */
    if (this.timeout) { clearTimeout(this.timeout); }
    this.timeout = setTimeout(() => {
      this.carregarPedidos();
    }, 800);
  }

  search(value: any) {
    if (this.timeout) { clearTimeout(this.timeout); }
    this.timeout = setTimeout(() => {
      this.applySearch(value);
    }, 800);
  }

  applySearch(value: any) {
    this.blockBtnFilter = true;
    if (
      value.qty === null ||
      value.qty === undefined
    ) {
      this.btnBlock();
    } else {
      this.filtroPedido.filtro(value, this.filtro).then((obj) => {
        this.filtro = obj;
        this.carregarPedidos();
        this.btnBlock();
      }).catch((erro) => {
        this.spinner.hide();
        this.btnBlock();
      });
    }
  }

  btnBlock() {
    setTimeout(() => {
      this.blockBtnFilter = false;
    }, 680);
  }

  limparData(tipo: string) {
    if (tipo === 'dataNasc') {
      this.filtro.datapedidode = '';
      this.filtro.datapedidoate = '';
      this.datapedidode = '';
      this.datapedidoate = '';
    }


    this.carregarPedidos();
  }


  gerarPedidos(ped: any) {
    this.relatorioService.pedidos(ped.id.toString())
      .then(relatorio => {
        const url = window.URL.createObjectURL(relatorio);
        window.open(url);
      });
  }

}
