///<reference path="./../typings/globals/core-js/index.d.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

import { ProductsService } from "./products.service";
import { AddProductComponent } from './add-product/add-product.component'
import { DeleteProductComponent } from './delete-product/delete-product.component'
import { EditProductComponent } from './edit-product/edit-product.component'

const appRoutes: Routes = [
    { path: 'ProductsList', component: TableComponent },
    { path: 'AddProduct', component: AddProductComponent },
    { path: 'DeleteProduct/:id', component: DeleteProductComponent },
    { path: 'EditProduct/:id', component: EditProductComponent },

    { path: '', redirectTo: '/ProductsList', pathMatch: 'full' },
    { path: '**', component: AppComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        TableComponent,
        AddProductComponent,
        DeleteProductComponent,
        EditProductComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [ProductsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
