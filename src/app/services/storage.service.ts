import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class StorageService {
    salvarInformacoesUsuario(data) {
        localStorage.setItem('usuario', JSON.stringify(data));
    }

    obterInformacoesUsuario() {
        const data = localStorage.getItem('usuario');
        return JSON.parse(data);
    }

    limpar(): any {
        localStorage.clear();
    }
}
