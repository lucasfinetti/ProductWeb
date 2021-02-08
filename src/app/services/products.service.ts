import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductModel } from 'src/app/models/product.model';

@Injectable({providedIn: 'root'})
export class ProductService {
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

    async getById(id: string): Promise<any> {
        const url = `${this.baseUrl}product-management/${id}`;
        return await this.httpClient.get(url).toPromise();
    }

    async getProducts(): Promise<any> {
        const url = `${this.baseUrl}product-management`;
        return await this.httpClient.get(url).toPromise();
    }

    async createProduct(product: any): Promise<any> {
        const url = `${this.baseUrl}product-management`;
        return await this.httpClient.post(url, product).toPromise();
    }

    async updateProduct(product: any): Promise<any> {
        const url = `${this.baseUrl}product-management`;
        return await this.httpClient.put(url, product).toPromise();
    }

    async deleteProduct(id: string): Promise<any> {
        const url = `${this.baseUrl}product-management?id=${id}`;
        return await this.httpClient.delete(url).toPromise();
    }
}