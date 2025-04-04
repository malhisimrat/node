import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { UserDataService } from '../user-data/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  BaseUrl: string = ''

  constructor(
    private http: HttpClient, @Inject('BASE_URL') _base: string,
    private userdata: UserDataService
  ) {
    this.BaseUrl = _base
  }
  /**
   * Admin Customer
   */
  public addCustomer(data: any) {
    var header_object = new HttpHeaders().set("Authorization", this.userdata.getToken());
    return this.http.post(this.BaseUrl + "/user/add", data, { headers: header_object });
  }

  public registerCustomer(data: any) {
    return this.http.post(this.BaseUrl + "/user/add", data);
  }

  public viewCustomer(data: any) {
    var header_object = new HttpHeaders().set("Authorization", this.userdata.getToken());
    return this.http.post(this.BaseUrl + "/user/all", data, { headers: header_object });
  }

  public singleCustomer(data: any) {
    var header_object = new HttpHeaders().set("Authorization", this.userdata.getToken());
    return this.http.post(this.BaseUrl + "/user/single", data, { headers: header_object });
  }

  public updateCustomer(data: any) {
    var header_object = new HttpHeaders().set("Authorization", this.userdata.getToken());
    return this.http.post(this.BaseUrl + "/user/update", data, { headers: header_object });
  }

}
