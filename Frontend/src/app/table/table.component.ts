import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";
import {Product} from "../product";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers:[ProductsService]
})
export class TableComponent implements OnInit {

  constructor(private productsService: ProductsService) { }
  products: Product[];
  errorMessage: any;
  
  ngOnInit() {
  	this.productsService.getProducts()
  		.subscribe(
	        products => this.products = products,
	        error =>  this.errorMessage = <any>error)
  }

}
