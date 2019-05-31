import {
  StyleSheet,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
  ApplicationStyles,
} from '../../Theme';

export default StyleSheet.create({
  loginContainer: {
    marginTop: hp('5%'),
    backgroundColor: ApplicationStyles.primaryColor.color,
    borderRadius: ApplicationStyles.commonBorderRadius(wp('80%')),
    width: wp('80%'),
    alignSelf: 'center',
    height: hp('7%'),
  },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
