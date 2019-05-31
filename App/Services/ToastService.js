import { NativeModules } from 'react-native';

const Toast = NativeModules.CustomToast;

export default (msg = '') => {
  Toast.show(msg, Toast.SHORT);
};
