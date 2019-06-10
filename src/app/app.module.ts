import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowproductsComponent } from './showproducts/showproducts.component';
import { ProductpresentationComponent } from './productpresentation/productpresentation.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';
import { CheckoutCartComponent } from './checkout-cart/checkout-cart.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowproductsComponent,
    ProductpresentationComponent,
    HeaderComponent,
    DetailsComponent,
    CheckoutCartComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
