import { get } from 'lodash';
import {
  switchMap,
  filter,
} from 'rxjs/operators';
import { routerNavigatedAction } from '@ngrx/router-store';

// import { CreditCardPaymentAdapter } from 'src/app/core/adapter';
import {
  load,
  loadSuccess,
} from './action';


