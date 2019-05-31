import {
  all, put, takeLatest, select,
} from 'redux-saga/effects';
import UserActions, { UserTypes } from '../Stores/User/Actions';
import AppActions from '../Stores/App/Actions';
import NavigationService from '../Services/NavigationService';


export function* login({ payload }) {
  try {
    // hit some api here
    yield put(AppActions.isLoading(true));
    yield put(UserActions.loginSuccess(payload));
    NavigationService.navigateAndReset('HomePage');
    yield put(AppActions.isLoading(false));
  } catch (e) {
    console.log('error', e);
    // catch errors here
  }
}


export function* register({ payload }) {
  try {
    // hit some api here
    yield put(AppActions.isLoading(true));
    yield put(UserActions.loginSuccess(payload));
    NavigationService.navigateAndReset('HomePage');
    yield put(AppActions.isLoading(false));
  } catch (e) {
    console.log('error', e);
  }
}

export function* logout() {
  try {
    // hit some api here
    yield put(UserActions.logoutSuccess());
    NavigationService.navigateAndReset('LogIn');
  } catch (e) {
    console.log('error', e);
  }
}

export function* startup() {
  const userData = yield select(({ user }) => user);
  // When those operations are finished we redirect to the main screen
  if (userData && userData.email) NavigationService.navigateAndReset('HomePage');
}

function* User() {
  yield all(
    [
      takeLatest(UserTypes.LOGIN_INIT, login),
      takeLatest(UserTypes.REGISTER_INIT, register),
      takeLatest(UserTypes.LOGOUT_INIT, logout),
      takeLatest(UserTypes.STARTUP, startup),
    ],
  );
}

export default User;
