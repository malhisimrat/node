import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userdata:UserDataService, private router: Router) { }
  isLoggedIn= false
  userData:any;
  ngOnInit(): void {
    if(this.userdata.getUserData() != null){
      this.isLoggedIn = true
      this.userData = JSON.parse(this.userdata.getUserData() ?? '')
    }
  }

  logout(){
    sessionStorage.clear()
    location.reload()
    //this.router.navigateByUrl('/')
  }

}
