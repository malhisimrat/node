import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { UserDataService } from '../user-data/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

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
  public allOrders(data: any) {
    var header_object = new HttpHeaders().set("Authorization", this.userdata.getToken());
    return this.http.post(this.BaseUrl + "/order/all", data, { headers: header_object });
  }

  public singleOrders(data: any) {
    var header_object = new HttpHeaders().set("Authorization", this.userdata.getToken());
    return this.http.post(this.BaseUrl + "/order/single", data, { headers: header_object });
  }

  public updateOrder(data: any) {
    var header_object = new HttpHeaders().set("Authorization", this.userdata.getToken());
    return this.http.post(this.BaseUrl + "/order/update", data, { headers: header_object });
  }

  
  public addOrder(data: any) {
    var header_object = new HttpHeaders().set("Authorization", this.userdata.getToken());
    return this.http.post(this.BaseUrl + "/order/add", data, { headers: header_object });
  }
  
}
