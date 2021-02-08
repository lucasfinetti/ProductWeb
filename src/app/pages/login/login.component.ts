import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { StorageService } from 'src/app/services/storage.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private messageService: MessageService,
    private accountService: AccountService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const account = {
      Username: this.loginForm.get('username').value,
      Password: this.loginForm.get('password').value
    }

    this.accountService.signIn(account)
    .then(resp => {
      location.href = "/#/products";
    
      this.storageService.salvarInformacoesUsuario(account);
    })
    .catch(resp => {
      this.mostrarMensagem(resp, true);
    });
  }

  mostrarMensagem(msg: string, success: boolean) {
    const message = {
        severity: success ? 'success' : 'error',
        summary: success ? 'OK' : 'Erro',
        detail: msg,
    };

    this.messageService.add(message);
    alert(msg);
  }
}
