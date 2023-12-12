import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../auth.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  background: any = '/assets/images/background.jpg';
  logo: any = '/assets/images/background.png';
  deviceInfo = null;
  dialogiOS: boolean;
  position: string;

  messages: Message[] | undefined;


  constructor(
    private authService: AuthService,
    private router: Router,
    private title: Title,
    private spinner: NgxSpinnerService,
  ) {}



  ngOnInit(): void {
    this.title.setTitle('Login');
  }



  logins(usuario: string, senha: string) {
    this.spinner.show();
    this.authService
      .login(usuario, senha)
      .then(() => {
        this.router.navigate(['/']);
        this.spinner.hide();
      })
      .catch((erro) => {
        this.addMessages(erro);
        setTimeout(() => {
          this.clearMessages()
        }, 2060);

        this.spinner.hide();
        //this.errorHandler.handle(erro);
      });
  }


  addMessages(msg: string) {
    this.messages = [
      { severity: 'error', detail: `${msg}` }
    ];
  }

  clearMessages() {
    this.messages = [];
  }

  EnterSubmit(event: any, form: NgForm, usuario: string, senha: string) {
    if (event.keyCode === 13) {
    }
  }
}


