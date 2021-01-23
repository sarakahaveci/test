import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as storeModuleConfiguration from './store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreditCardPaymentStoreEffects } from './store/effects';
import { PaymentService } from './services/services';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CreditCardPaymentFacade } from './store/facade';
import { CardPaymentComponent } from "./store/CardPaymentComponent.1";

@NgModule({
  declarations: [
    AppComponent,
    CardPaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ToasterModule,
    CommonModule,
    CreditCardPaymentStoreEffects,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    HttpClientModule,
    EffectsModule.forRoot(),
    StoreModule.forFeature(storeModuleConfiguration.moduleFeatureKey, storeModuleConfiguration.moduleReducers),
    EffectsModule.forFeature([CreditCardPaymentStoreEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [PaymentService, ToasterService, CreditCardPaymentFacade, CreditCardPaymentStoreEffects],
  bootstrap: [AppComponent]
})
export class AppModule { }
