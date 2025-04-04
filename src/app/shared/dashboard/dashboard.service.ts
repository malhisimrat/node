import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AdminauthService } from '../adminauth/adminauth.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseurl : any
  token :any
  constructor(private http : HttpClient,@Inject('baseurl') _baseurl:any,private adminauth : AdminauthService) {
    this.baseurl = _baseurl
    this.token = this.adminauth.getadmintoken()
  }

  dashbaord(){
    var header_object = new HttpHeaders().set("Authorization",this.token);

    return this.http.get(this.baseurl+"dashboard",{headers:header_object})
  }
}
