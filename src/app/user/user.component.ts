import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <a [routerLink]="['/user']">User</a>
      <button (click)="onNavigate()">Go home</button>
      {{id}}
      <hr>
      <router-outlet></router-outlet>
    `
})
export class UserComponent {
  private subscription: Subscription;
  private id: string;

  constructor(private router: Router, activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
  }

  onNavigate() {
    this.router.navigate(['/'], { queryParams: { 'analytics': 100 }, preserveQueryParams: true });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
