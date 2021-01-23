import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreditComponent } from './credit.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MemoizedSelector, DefaultProjectorFn, Action } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { State } from 'src/app/store';
import { initialState, PaymentState } from 'src/app/store/reducer';
import { CreditCardQuery } from 'src/app/store/selectors';

describe('CardComponent', () => {
  let actions$: Observable<Action>;

  let component: CreditComponent;
  let fixture: ComponentFixture<CreditComponent>;
  let store: MockStore<State>;
  let paymentStateSelector: MemoizedSelector<
    State,
    PaymentState,
    DefaultProjectorFn<PaymentState>
  >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CreditComponent],
      providers: [
        FormBuilder,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    const cardState = initialState;
    paymentStateSelector = store.overrideSelector(
      CreditCardQuery.getPaymentState,
      cardState
    );
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
