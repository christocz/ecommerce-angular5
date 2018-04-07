import {
  ProductState
} from './product/reducers/product-state';
import {
  AuthState
} from './auth/reducers/auth.state';
// import { UserState } from './user/reducers/user.state';
// import { CheckoutState } from './checkout/reducers/checkout.state';
import {
  SearchState
} from './home/reducers/search.state';

export interface AppState {
  products: ProductState;
  auth: AuthState;
  //   checkout: CheckoutState;
  //   users: UserState;
  search: SearchState;
}
