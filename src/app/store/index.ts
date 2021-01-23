
import * as fromCreditCardPaymentStoreActions from './action';
import * as fromCreditCardPaymentStoreEffects from './effects';
import * as fromCreditCardPaymentStoreSelectors from './selectors';
import * as fromCreditCardPaymentStoreReducer from './reducer';
import { CreditCardState } from '../component/credit/credit.module';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import { PaymentState } from './reducer';


export {
    fromCreditCardPaymentStoreActions,
    fromCreditCardPaymentStoreEffects,
    fromCreditCardPaymentStoreSelectors,
    fromCreditCardPaymentStoreReducer
};

export const moduleFeatureKey = 'payment';

export interface paymentModuleState {
  [fromCreditCardPaymentStoreReducer.featureKey]: PaymentState;
}

export const initialModuleState: paymentModuleState = {
  [fromCreditCardPaymentStoreReducer.featureKey]: fromCreditCardPaymentStoreReducer.initialState,
};

export interface State {
  [moduleFeatureKey]: paymentModuleState;
}

export const selectFeature = createFeatureSelector<State, paymentModuleState>(moduleFeatureKey);

export const moduleReducers = new InjectionToken<ActionReducerMap<paymentModuleState>>(moduleFeatureKey, {
  factory: () => ({
    [fromCreditCardPaymentStoreReducer.featureKey]: fromCreditCardPaymentStoreReducer.reducer,
  })
});

