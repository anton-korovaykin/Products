import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductsService} from "../products.service";
import {Product} from "../product";

@Component({
  	selector: 'app-add-product',
  	templateUrl: './add-product.component.html',
  	styleUrls: ['./add-product.component.css'],
  	providers:[ProductsService]
})
export class AddProductComponent {
	errorMessage:any;
 	img:string;
 	model:Product= new Product (9, "", 0, new Date, "")
  
  	constructor(private router: Router, private productsService: ProductsService) {}
  
	onImageSelected(event:any){
  	   var reader = new FileReader();
   		reader.readAsDataURL(event.target.files[0]);
   		reader.onload =  ()=> {
     		this.model.Image = reader.result;
   		};
   		reader.onerror = function (error) {
     		console.log('Error: ', error);
   		};
  	}
  	
  	onSubmit(){
  		this.productsService.create(this.model)
  			.subscribe(
	        	product => this.router.navigate(['/']),
	        	error =>  this.errorMessage = <any>error);
  	}
}
