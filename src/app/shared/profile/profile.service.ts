import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AdminauthService } from '../adminauth/adminauth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseurl : any
  token :any
  constructor(private http : HttpClient,@Inject('baseurl') _baseurl:any,private adminauth : AdminauthService) {
    this.baseurl = _baseurl
    this.token = this.adminauth.getadmintoken()
  }

  profile(form:any){
    console.log(form)
    var header_object = new HttpHeaders().set("Authorization",this.token);
    return this.http.post(this.baseurl+"user/single",form,{headers:header_object})
  }

}
