import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuariosUrl: string;

  permissoesUrl: string;

constructor(private http: HttpClient) {
  this.usuariosUrl = `https://6537f565a543859d1bb112a7.mockapi.io/pedidos`
  this.permissoesUrl = `https://6537f565a543859d1bb112a7.mockapi.io/usuarios/login`
}


listarPermissoes(id: number): Promise<any> {
  return firstValueFrom(this.http.get(`${this.permissoesUrl}/${id}`)).then(
    (response) => response
  );
}

}
