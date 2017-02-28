import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home-component',
  template: `
    <h1>
      Home Component!
    </h1>
    <hr>
    {{param}}
  `,
  styles: []
})
export class HomeComponent implements OnDestroy{
  private subscription: Subscription;
  private param: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.queryParams.subscribe(
      qweryParams => this.param = qweryParams['analytics']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
