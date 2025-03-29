import { Component, ViewChild } from '@angular/core';
import { ContasService } from '../../../services/contas.service';
import { MatTableDataSource } from '@angular/material/table';
import { ContaResponseModel } from '../../../models/conta.response.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-consultar-contas',
  standalone: false,
  templateUrl: './consultar-contas.component.html',
  styleUrl: './consultar-contas.component.css'
})
export class ConsultarContasComponent {


  //declarando as colunas da tabela do material
  columns = ['id', 'nome', 'data', 'valor', 'tipo', 'acoes'];


  //declarando o 'data source' para armazenar os dados da tabela do material
  dataSource = new MatTableDataSource<ContaResponseModel>([]);


  //declarando os componentes 'filhos' complementares da tabela do material
  @ViewChild(MatPaginator) paginator!: MatPaginator; //paginação da tabela
  @ViewChild(MatSort) sort!: MatSort; //ordenação da tabela


  //método construtor para injeção de dependência dos serviços
  constructor(private contasService: ContasService) {}
 
  //evento executado quando o componente é aberto
  ngOnInit() {
    this.consultarContas();
  }


  //função para consultar as contas e popular a tabela do material
  consultarContas() {
    this.contasService.getAll() //executando a consulta de contas na API
      .subscribe({ //aguardando a resposta
        next: (response) => { //capturando retorno de sucesso
          this.dataSource.data = response; //preenchendo os dados da tabela
          this.dataSource.paginator = this.paginator; //habilitando o paginador
          this.dataSource.sort = this.sort; //habilitando a ordenação
        }
      });
  }


  //função para filtrar os dados da tabela do material
  filtrarContas(event: Event) {
    //capturando o valor preenchido no campo do formulário
    const filtro = (event.target as HTMLInputElement).value;
    //filtrando os dados da tabela baseado no valor digitado
    this.dataSource.filter = filtro.trim();
  }


}




