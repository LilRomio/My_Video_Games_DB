import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '../../globals/_route';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  ROUTES: any;
  constructor(private router: Router) {
    this.ROUTES = ROUTES;
  }

  ngOnInit(): void {}
}
