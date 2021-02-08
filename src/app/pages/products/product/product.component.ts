import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductModel } from "src/app/models/product.model";
import { ProductService } from 'src/app/services/products.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  url: string;
  productForm: FormGroup;
  product: any;
  id: string;

  constructor(
    private messageService: MessageService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute)
    {}

  async ngOnInit() {
    this.url = "assets/img/icons/empty-18.png";

    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      value: new FormControl('', Validators.required)
    });
    
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id) {
      this.product = await this.productService.getById(this.id);
      this.productForm.patchValue(this.product);
      this.url = this.product.image;
    }
  }

  onSelectFile(event) {
    // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.url = event.target.result.toString();
      };
    }
  }

  onSubmit() {
    const product = {
      Name: this.productForm.get('name').value,
      Value: parseFloat(this.productForm.get('value').value),
      Image: this.url
    }

    if (this.id) {
      product['id'] = this.id;
      this.productService.updateProduct(product)
      .then(resp => {
        this.mostrarMensagem('Produto editado com sucesso.', true);
      })
      .catch(resp => {
        this.mostrarMensagem(resp, true);
      });
    }
    else {
      this.productService.createProduct(product)
      .then(resp => {
        this.mostrarMensagem('Produto adicionado com sucesso.', true);
      })
      .catch(resp => {
        this.mostrarMensagem(resp, true);
      });
    }

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
