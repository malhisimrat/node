import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { UserDataService } from '../user-data/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  BASEURI: string = ""
  constructor(private http: HttpClient, @Inject('BASE_URL') _baseUrl:  string, private userdata: UserDataService) {
    this.BASEURI = _baseUrl
   }

   login(form: any){
    return this.http.post(this.BASEURI + '/user/login', form)
  }

  public getDashboard(data: any) {
    console.log(this.BASEURI + '/dashboard')
    var header_object = new HttpHeaders().set("Authorization", this.userdata.getToken());
    return this.http.get(this.BASEURI + "/dashboard", { headers: header_object });
  }


}
