import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductModel } from 'src/app/models/product.model';

@Injectable({providedIn: 'root'})
export class AccountService {
    private baseUrl: string;
    // private headers: HttpHeaders;

    constructor(private httpClient: HttpClient) {
        this.baseUrl = environment.apiUrl;

        // this.headers = new HttpHeaders({
        //     'Content-Type': 'application/json',
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
        // });
    }

    async signIn(account: any): Promise<any> {
        const url = `${this.baseUrl}account-management`;
        return this.httpClient.post(url, account).toPromise();
    }
}