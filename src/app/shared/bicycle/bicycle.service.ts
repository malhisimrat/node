import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AdminauthService } from '../adminauth/adminauth.service';

@Injectable({
  providedIn: 'root'
})
export class BicycleService {

  baseurl : any
  token :any
  constructor(private http : HttpClient,@Inject('baseurl') _baseurl:any,private adminauth : AdminauthService) {
    this.baseurl = _baseurl
    this.token = this.adminauth.getadmintoken()
  }

  add(form:any){
    var header_object = new HttpHeaders().set("Authorization",this.token);

    return this.http.post(this.baseurl+"bicycle/add",form,{headers:header_object})
  }

  getall(form:any){
    // var header_object = new HttpHeaders().set("Authorization",this.token);
    return this.http.post(this.baseurl+"bicycle/all",form)
  }

  getsingle(form:any){
    // var header_object = new HttpHeaders().set("Authorization",this.token);
    return this.http.post(this.baseurl+"bicycle/single",form)
  }

  udpate(form:any){
    var header_object = new HttpHeaders().set("Authorization",this.token);
    return this.http.post(this.baseurl+"bicycle/update",form,{headers:header_object})
  }

}

