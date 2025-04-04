import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { UserDataService } from '../user-data/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BaseUrl: string = ''

  constructor(
    private http: HttpClient, @Inject('BASE_URL') _base: string,
    private userdata: UserDataService
  ) {
    this.BaseUrl = _base
  }
  /**
   * Admin Category
   */
  public addProduct(data: any) {
    var header_object = new HttpHeaders().set("Authorization", this.userdata.getToken());
    return this.http.post(this.BaseUrl + "/product/add", data, { headers: header_object });
  }

  public viewProduct(data: any) {
    var header_object = new HttpHeaders().set("Authorization", this.userdata.getToken());
    return this.http.post(this.BaseUrl + "/product/all", data, { headers: header_object });
  }

  public singleProduct(data: any) {
    var header_object = new HttpHeaders().set("Authorization", this.userdata.getToken());
    return this.http.post(this.BaseUrl + "/product/single", data, { headers: header_object });
  }

  public updateProduct(data: any) {
    var header_object = new HttpHeaders().set("Authorization", this.userdata.getToken());
    return this.http.post(this.BaseUrl + "/product/update", data, { headers: header_object });
  }
}
