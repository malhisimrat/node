import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { UserDataService } from '../user-data/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

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
  public addSubcategory(data: any) {
    var header_object = new HttpHeaders().set("Authorization", this.userdata.getToken());
    return this.http.post(this.BaseUrl + "/subcategory/add", data, { headers: header_object });
  }

  public viewSubcategory(data: any) {
    var header_object = new HttpHeaders().set("Authorization", this.userdata.getToken());
    return this.http.post(this.BaseUrl + "/subcategory/all", data, { headers: header_object });
  }

  public singleSubcategory(data: any) {
    var header_object = new HttpHeaders().set("Authorization", this.userdata.getToken());
    return this.http.post(this.BaseUrl + "/subcategory/single", data, { headers: header_object });
  }

  public updateSubcategory(data: any) {
    var header_object = new HttpHeaders().set("Authorization", this.userdata.getToken());
    return this.http.post(this.BaseUrl + "/subcategory/update", data, { headers: header_object });
  }
}
