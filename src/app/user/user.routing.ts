import { UserEditGuard } from './user-edit.guard';
import { Routes } from '@angular/router';

import { UserEditComponent } from './user-edit.component';
import { UserDetailComponent } from './user-detail.component';
import { DetailGuard } from './detail.guard';

export const USER_ROUTES: Routes = [
    { path: 'detail', component: UserDetailComponent, canActivate: [DetailGuard] },
    { path: 'edit', component: UserEditComponent, canDeactivate: [UserEditGuard] }
];
