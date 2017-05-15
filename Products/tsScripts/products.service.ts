import { Injectable }              from '@angular/core';
import { Http, Response, RequestMethod }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Product} from "./product";

@Injectable()
export class ProductsService {
	private productUrl = '/api/product';
    constructor(private http: Http) { }
    private options = {
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    };

    getProducts(): Observable<Product[]> {
        return this.http.get(this.productUrl)
            .map(this.extractData)
	        .catch(this.handleError);
    }

    get(id: number): Observable<Product> {
        let params = new URLSearchParams();
        params.set('id', id.toString());
        return this.http.get(this.productUrl, params)
            .map(this.extractData)
            .catch(this.handleError);
    }

    create(product: Product): Observable<Product> {

        return this.http.post(this.productUrl, JSON.stringify(product), this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    update(product: Product): Observable<Product> {
        return this.http.put(this.productUrl, JSON.stringify(product), this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    delete(id: Number): Observable<Product> {
        return this.http.delete(`${this.productUrl}/${id}`, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }


    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    private serializeObj(obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    }
}
