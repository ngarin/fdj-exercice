import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public backUrl: string

  constructor(private router: Router) {}

  public ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.match(/^\/teams\/([0-9]+)\/([0-9]+)$/)) {
          const match = event.url.match(/^\/teams\/([0-9]+)\/([0-9]+)$/);
          this.backUrl = `/teams/${match[1]}`;
        } else if (event.url.match(/^\/teams\/([0-9]+)$/)) {
          this.backUrl = '/';
        } else {
          this.backUrl = '';
        }
      }
    });
  }

}
