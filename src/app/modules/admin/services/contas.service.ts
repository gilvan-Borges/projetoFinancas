import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { ContaRequestModel } from "../models/conta.request.model";
import { Observable } from "rxjs";
import { ContaResponseModel } from "../models/conta.response.model";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class ContasService {


    //definindo o endpoint que iremos acessar da API
    endpoint: string = `${environment.apiFinancas}/contas`


    //método construtor para injeção de dependência
    constructor(private http: HttpClient) { }


    //POST: método para cadastrar conta
    post(request: ContaRequestModel): Observable<ContaResponseModel> {
        return this.http.post<ContaResponseModel>(this.endpoint, request);
    }


    //PUT: método para atualizar conta
    put(id: string, request: ContaRequestModel): Observable<ContaResponseModel> {
        return this.http.put<ContaResponseModel>(`${this.endpoint}/${id}`, request);
    }


    //DELETE: método para excluir conta
    delete(id: string): Observable<ContaResponseModel> {
        return this.http.delete<ContaResponseModel>(`${this.endpoint}/${id}`);
    }


    //GET: método para consultar todas as contas
    getAll(): Observable<ContaResponseModel[]> {
        return this.http.get<ContaResponseModel[]>(this.endpoint);
    }


    //GET: método para consultar 1 tarefa baseado no ID
    getById(id: string): Observable<ContaResponseModel> {
        return this.http.get<ContaResponseModel>(`${this.endpoint}/${id}`);
    }
}


