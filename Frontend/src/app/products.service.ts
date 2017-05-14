import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Product} from "./product";

@Injectable()
export class ProductsService {
	private productUrl = 'http://localhost:4201/api/product';
  constructor(private http: Http) { }

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
    let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });

    return this.http.put(this.productUrl, product, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

     update(product: Product): Observable<Product> {
    let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });

    return this.http.post(this.productUrl, product, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

       delete(id: Number): Observable<Product> {
    let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });

    return this.http.post(this.productUrl, {id}, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }


  private extractData(res: Response) {
  	console.log(res)
    let body = res.json();
    console.log(body)
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

}
