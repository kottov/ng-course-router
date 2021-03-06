import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
export class DetailGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return confirm('Are you sure?');
    }
}