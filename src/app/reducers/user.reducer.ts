import { User } from '../models/user.model';
import * as UserActions from '../actions/user.actions';

const initialState: User = {
  firstName: 'Chris',
  lastName: 'Jannenga',
  userName: 'cjannenga',
  email: 'cjannenga312@gmail.com'
};

export function userReducer(state: User[] = [initialState], action: UserActions.Actions) {

  switch (action.type) {
    case(UserActions.ADD_USER):
      return [...state, action.payload];
    case(UserActions.REMOVE_USER):
      state.splice(action.payload, 1);
      return state;
    default:
      return state;
  }
}

