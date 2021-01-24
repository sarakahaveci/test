import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  concatMap,
  map,

  mergeMap,

  withLatestFrom
} from 'rxjs/operators';
import { PaymentService } from '../services/services';
import {
  payWithCard,
  payWithCardError,
  payWithCardSuccess
} from './action';
import { ToasterService } from 'angular2-toaster';
import { Router } from '@angular/router';



@Injectable()
export class CreditCardPaymentStoreEffects {
  constructor(
    private dataService: PaymentService,
    private toasterService: ToasterService,
    private router: Router,
    private actions$: Actions
  ) { }

  proceedPayment$ = createEffect(() => this.actions$.pipe(
    ofType(payWithCard),
    concatMap((action) => {
      return of(action).pipe(withLatestFrom());
    }),
    mergeMap(([action]) => {
      const { paymentData } = action;
      let returnedAction;
      return this.dataService.makePayment(paymentData).pipe(
        map((response) => {
          if (response.body.status === 'success') {
            this.toasterService.pop(
              'success',
              'SUCCESSFUL',
              'Your payment was successful'
            );
            this.router.navigate(['']);
            returnedAction = payWithCardSuccess({ creditCardData: paymentData });
          } else {
            this.toasterService.pop(
              'error',
              'FAILURE',
              'Your Payment Failed'
            );
            returnedAction = payWithCardError({
              error: 'Something went wrong',
            });
          }
          return returnedAction;
        }),
        catchError((error) => of(payWithCardError({ error })))
      );
    })
  )
  );
}
