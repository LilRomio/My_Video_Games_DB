import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ROUTES } from '../../globals/_route';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  ROUTES: any;
  constructor(private router: Router) {
    this.ROUTES = ROUTES;
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.router.navigate(['', form.value.search]);
  }
}
