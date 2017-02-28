import { Observable } from 'rxjs/Rx';
import { CanDeactivate } from '@angular/router';

export interface CanDeactivateComponent {
    canDeactivate: () => Observable<boolean> | boolean;
}

export class UserEditGuard implements CanDeactivate<CanDeactivateComponent> {
    canDeactivate(component: CanDeactivateComponent): Observable<boolean> | boolean {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
