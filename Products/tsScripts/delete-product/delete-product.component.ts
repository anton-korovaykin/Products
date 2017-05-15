import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from "../products.service";
import { Product } from "../product";

@Component({
    selector: 'app-delete-product',
    templateUrl: './tsScripts/delete-product/delete-product.component.html',
    styleUrls: ['./tsScripts/delete-product/delete-product.component.css'],
    providers: [ProductsService]
})
export class DeleteProductComponent implements OnInit {
    errorMessage: any;
    name: string;
    id: number;

    constructor(private router: Router, private productsService: ProductsService, private route: ActivatedRoute) { }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.productsService.get(this.id).subscribe(
                products => this.name = products.Name,
                error => this.errorMessage = error
            );
        });

    }

    deleteSubmited() {
        this.productsService.delete(this.id).subscribe(
            () => this.router.navigate(['/']),
            error => this.errorMessage = error
        );
    }
}
