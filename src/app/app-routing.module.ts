import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowproductsComponent } from './showproducts/showproducts.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: '', component: ShowproductsComponent},
  {path: 'details/:id', component: DetailsComponent}
  // {path: 'about', component: AboutComponent},
  // {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
