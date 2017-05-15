import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from "../products.service";
import { Product } from "../product";

@Component({
    selector: 'app-edit-product',
    templateUrl: './tsScripts/edit-product/edit-product.component.html',
    styleUrls: ['./tsScripts/edit-product/edit-product.component.css'],
    providers: [ProductsService]
})
export class EditProductComponent {
    errorMessage: any;
    img: string;
    model: Product;
    id: number;

    constructor(private router: Router, private productsService: ProductsService, private route: ActivatedRoute) { }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = +params["id"];
            this.productsService.get(this.id).subscribe(
                products => this.model = products,
                error => this.errorMessage = error
            );
        });
    }

    onImageSelected(event: any) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => this.model.Image = reader.result;
        reader.onerror = error => console.log('Error: ', error);
    }

    onSubmit() {
        this.productsService.update(this.model).subscribe(
            () => this.router.navigate(['/']),
            error => this.errorMessage = error
        );
    }
}
