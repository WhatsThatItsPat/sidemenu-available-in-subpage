import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subpage',
  templateUrl: './subpage.page.html',
  styleUrls: ['./subpage.page.scss'],
})
export class SubpagePage {

  url = this.router.url;

  level = this.url
    .split('/')
    .filter(segment => segment === 'subpage')
    .length;

  defaultHref = this.url.substring(
    0, this.url.lastIndexOf('/')
  );

  constructor(
    private router: Router
  ) { }

}
