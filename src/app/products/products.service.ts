import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  limit = 6

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<any> {
    return this.http.get(`https://fakestoreapi.com/products`)
      .pipe(
        tap(data => console.log(data))
      )
  }

  getFeaturedProducts() {
    return this.http.get(`https://fakestoreapi.com/products?limit=${this.limit}`)
      .pipe(
        tap(data => console.log(data))
      )
  }
}
