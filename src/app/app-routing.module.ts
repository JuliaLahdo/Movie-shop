import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowproductsComponent } from './showproducts/showproducts.component';
import { DetailsComponent } from './details/details.component';
import { CheckoutCartComponent } from './checkout-cart/checkout-cart.component';
import { AdminComponent } from './admin/admin.component';
import { ConfirmedOrderComponent } from './confirmed-order/confirmed-order.component';

const routes: Routes = [
  {path: '', component: ShowproductsComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'checkout', component: CheckoutCartComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'confirmed', component: ConfirmedOrderComponent}
  // {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
