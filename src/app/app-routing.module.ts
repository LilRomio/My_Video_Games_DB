import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ROUTES } from './globals/_route';
const routes: Routes = [
  {
    path: ROUTES.home,
    component: HomeComponent,
  },
  {
    path: ROUTES.search,
    component: HomeComponent,
  },
  {
    path: ROUTES.details,
    component: DetailsComponent,
  },
  {
    path: ROUTES.error,
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
