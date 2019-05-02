import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowproductsComponent } from './showproducts/showproducts.component';

const routes: Routes = [
  {path: '', component: ShowproductsComponent}
  // {path: 'about', component: AboutComponent},
  // {path: 'details/:id', component: DetailsComponent},
  // {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
