import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { UserDataService } from '../user-data/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

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
  public addCategory(data: any) {
    var header_object = new HttpHeaders().set("Authorization", this.userdata.getToken());
    return this.http.post(this.BaseUrl + "/category/add", data, { headers: header_object });
  }

  public viewCategory(data: any) {
    var header_object = new HttpHeaders().set("Authorization", this.userdata.getToken());
    return this.http.post(this.BaseUrl + "/category/all", data, { headers: header_object });
  }

  public singleCategory(data: any) {
    var header_object = new HttpHeaders().set("Authorization", this.userdata.getToken());
    return this.http.post(this.BaseUrl + "/category/single", data, { headers: header_object });
  }

  public updateCategory(data: any) {
    var header_object = new HttpHeaders().set("Authorization", this.userdata.getToken());
    return this.http.post(this.BaseUrl + "/category/update", data, { headers: header_object });
  }
}
