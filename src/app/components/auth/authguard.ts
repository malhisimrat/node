import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private userdata: UserDataService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log(this.userdata.getUserData())
        if (this.userdata.getUserData() == null) {
            this.router.navigateByUrl('/login')
            return false
        }
        return true
    }

}