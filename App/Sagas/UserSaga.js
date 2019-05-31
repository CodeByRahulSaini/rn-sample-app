import {
  all, call, put, takeLatest, select, take,
} from 'redux-saga/effects';

import { UserTypes } from '../Stores/User/Actions';
import NavigationService from '../Services/NavigationService'


export function* login({ payload }) {
  try { 
    //hit some api 
    // yield call(navigateAndReset, 'HomePage', null);

    NavigationService.navigateAndReset('HomePage');

  } catch (e) { 
    // catch errors here
  }
} 


export function* register({ payload }) {
  try {
    NavigationService.navigateAndReset('HomePage')
  } catch (e) {
  }
}

export function* logout({ payload }) {
  try {
    NavigationService.navigateAndReset('LogIn')
  } catch (e) {
  }
}

function* User() {
  yield all(
    [
      takeLatest(UserTypes.LOGIN_INIT, login),
      takeLatest(UserTypes.REGISTER_INIT, register),
      takeLatest(UserTypes.LOGOUT_INIT, logout),
    ],
  );
}

export default User;
