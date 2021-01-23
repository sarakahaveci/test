import { Injectable } from '@angular/core';
import { select, State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreditCardState } from '../component/credit/credit.module';
import { load, payWithCard, payWithCardSuccess } from './action'
import { CreditCardQuery } from './selectors';

@Injectable()
export class CCreditCardPaymentFacade {
  readonly data$: Observable<CreditCardState>;

  constructor(private store: Store) {
    this.data$ = this.store.pipe(select(CreditCardQuery.getCreditCardState));
  }

  getCreditCardData() {
    this.store.dispatch(load());
  }

  makePayment(paymentData: CreditCardState) {
    this.store.dispatch(payWithCard({paymentData}))
  }

  storeCard(creditCardData) {
    this.store.dispatch(payWithCardSuccess(creditCardData))
  }
}
