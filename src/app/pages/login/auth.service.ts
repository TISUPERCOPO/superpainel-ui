import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl: string;
  tokensRevokeUrl: string;
  jwtPayload: any;
  linkHttp: HttpClient;
  resetpass: string;
  empresaativaUrl: string;

constructor(
  private http: HttpClient,
  //private jwtHelper: JwtHelperService,
  private messageService: MessageService,
  private httpBackend: HttpBackend
) {
  this.oauthTokenUrl = `https://6537f565a543859d1bb112a7.mockapi.io/usuario/login`;
}

login(usuario: string, senha: string): Promise<void> {
  const headers = new HttpHeaders()
    .set('Authorization', 'Basic bGFic3JhZDojU0VSVkVSQGxhYnNyYWQ=')
    .set('Content-Type', 'application/x-www-form-urlencoded');

  const body = `username=${usuario}&password=${senha}&grant_type=password`;
  // Primeira opção
   return  firstValueFrom(this.http.post<any>(this.oauthTokenUrl, body, { headers }))
   .then((response) => {
    const responseError = response.error;
    if (response.status === 400) {
      if (responseError.error === 'invalid_grant') {
        return Promise.reject('Usuário ou senha inválido');
      }
    }
    return Promise.reject(response);
  });
 /*  return firstValueFrom(
    this.http.post(this.oauthTokenUrl, body, {
      headers,
      withCredentials: true,
    })
  ) */
/*     .then((response) => {
      // segunda opção
      this.armazenarToken(response['access_token'], response);
      this.messageService.add({
        severity: 'success',
        summary: 'Login',
        detail: 'Efetuado com sucesso',
      });
    }) */

}


/* private armazenarToken(token: string, response: any) {
  this.jwtPayload = this.jwtHelper.decodeToken(token);
  if (response?.nome) {
    this.jwtPayload.nome = response.nome;
    localStorage.setItem('name_user', response.nome);
  }
  localStorage.setItem('token', token);
} */


}
