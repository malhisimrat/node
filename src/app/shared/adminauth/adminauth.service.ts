import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  baseurl : any
  constructor(private http : HttpClient,@Inject('baseurl') _baseurl:any) {
    this.baseurl = _baseurl
  }

  login(form:any){
    return this.http.post(this.baseurl+"user/login",form)
  }


  createservice(data:any){
    localStorage.setItem('admintoken',data.token)
    localStorage.setItem('adminid',data.data._id)
    localStorage.setItem('adminuserid',data.data.userId)
    localStorage.setItem('adminemail',data.data.email)
    localStorage.setItem('adminuserType',data.data.userType)
  }

  getadmintoken(){
    return localStorage.getItem('admintoken')
  }

  getadminid(){
    return localStorage.getItem('adminid')
  }

  getadminuserid(){
    return localStorage.getItem('adminuserid')
  }

  getadminemail(){
    return localStorage.getItem('adminemail')
  }
  
  getadminuserType(){
    return localStorage.getItem('adminuserType')
  }

  destroyservice(){
    localStorage.removeItem('admintoken')
    localStorage.removeItem('adminid')
    localStorage.removeItem('adminuserid')
    localStorage.removeItem('adminemail')
    localStorage.removeItem('adminuserType')
  }

}
