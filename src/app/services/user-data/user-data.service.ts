import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  public setData(userdata: any){
    sessionStorage.setItem('userdata',JSON.stringify(userdata))
  }

  public getToken(){
    var token:any =  sessionStorage.getItem('userdata')
    //console.log(sessionStorage.getItem('userdata'), token.token)
    return JSON.parse(token).token
  }

  public getUserData(){
    return sessionStorage.getItem('userdata')
    
  }

}
