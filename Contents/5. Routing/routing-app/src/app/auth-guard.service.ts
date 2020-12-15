import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGaurd implements CanActivate, CanActivateChild {
    constructor(private authSrv: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<boolean> | Promise<boolean> | boolean {
            return this.authSrv.isAuthenticated()
                .then(
                    (authStatus: boolean) => {
                        if (authStatus) {
                            return true;
                        } else {
                            this.router.navigate(['/']);
                        }
                    }
                );
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<boolean> | Promise<boolean> | boolean {
            return this.canActivate(route, state);
        }
}
