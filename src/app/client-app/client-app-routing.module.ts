import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { DetailBookComponent } from '../book/detail-book/detail-book.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'books',
    component: ListPageComponent,
    children: [
      { path: '/:id', component: DetailBookComponent },
    ]
  },
  {
    path: 'cart',
    component: ListPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientAppRoutingModule { }
