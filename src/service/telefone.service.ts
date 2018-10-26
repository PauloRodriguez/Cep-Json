import { Injectable } from "../../node_modules/@angular/core";
import { HttpClient } from "../../node_modules/@angular/common/http";
import { Observable } from "../../node_modules/rxjs/Observable";
import { Telefone } from "../model/telefone";

@Injectable()
export class TelefoneService {
    constructor(private http: HttpClient) {}

    getTelefones() : Observable<Telefone[]>{
        return this.http.get<Telefone[]>(
            `https://dadosabertosapi.ufca.edu.br/service/recurso/telefones.json`);
    }
}
