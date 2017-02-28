import { UserEditGuard } from './user/user-edit.guard';
import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail.component';
import { UserEditComponent } from './user/user-edit.component';
import { HomeComponent } from './home-component.component';
import { DetailGuard } from './user/detail.guard';


@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UserDetailComponent,
        UserEditComponent,
        HomeComponent
    ],
    imports: [BrowserModule, routing],
    bootstrap: [AppComponent],
    providers: [DetailGuard, UserEditGuard]
})
export class AppModule {}
