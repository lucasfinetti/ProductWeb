import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products.service';
import { ConfirmationDialogService } from 'src/app/components/confirmation-dialog/confirmation-dialog.service';
import { ProductModel } from 'src/app/models/product.model'
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: ProductModel[];

  constructor(
    private messageService: MessageService,
    private productService: ProductService,
    private confirmationDialogService: ConfirmationDialogService) { }

  async ngOnInit() {
    const products = await this.productService.getProducts();
    this.products = products;
  }

  deleteProduct(id: string) {
    this.confirmationDialogService.confirm('Confirmar..', 'Deseja mesmo deletar esse produto?')
      .then(() => {
        this.productService.deleteProduct(id)
        .then(resp => {
          this.mostrarMensagem('Produto deletado com sucesso.', true);
        })
        .catch(resp => {
          this.mostrarMensagem(resp, true);
        });;
        this.products = this.products.filter(x => x.id != id);
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
