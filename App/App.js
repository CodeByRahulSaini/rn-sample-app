import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import createStore from './Stores';
import RootScreen from './Containers/Root/RootScreen';


const { store, persistor } = createStore();

const myApp = function myApp() {
  return (
  /**
   * @see https://github.com/reduxjs/react-redux/blob/master/docs/api.md#provider-store
   */
    <Provider store={store}>
      {/**
         * PersistGate delays the rendering of the app's UI until the
         * persisted state has been retrieved
         * and saved to redux.
         * The `loading` prop can be `null` or any react instance to show
         * during loading (e.g. a splash screen),
         * for example `loading={<SplashScreen />}`.
         * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
         */}
      <PersistGate loading={null} persistor={persistor}>
        <RootScreen />
      </PersistGate>
    </Provider>
  );
};

export default myApp;
