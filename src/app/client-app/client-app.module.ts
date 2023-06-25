import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientAppRoutingModule } from './client-app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { CartComponent } from './cart/cart.component';
import { ListPageComponent } from './list-page/list-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomePageComponent,
    DetailPageComponent,
    CartComponent,
    ListPageComponent
  ],
  imports: [
    CommonModule,
    ClientAppRoutingModule,
    SharedModule
  ]
})
export class ClientAppModule { }
