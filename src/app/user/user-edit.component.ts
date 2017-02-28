import { CanDeactivateComponent } from './user-edit.guard';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'app-user-edit',
    template: `
        <h3>User Edit</h3>
        <button (click)="isDone = true">Done</button>
        <button (click)="onNavigate()">Go home</button>
    `
})
export class UserEditComponent implements CanDeactivateComponent {
    private isDone = false;
    constructor(private router: Router) {}

    onNavigate() {
        this.router.navigate(['/']);
    }

    canDeactivate() {
        if (!this.isDone) {
            return confirm('Are you sure?');
        } return true;
    }
}
