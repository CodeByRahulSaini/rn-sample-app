import {
  StyleSheet,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
  Colors, ApplicationStyles,
} from '../../Theme';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  subContainer: { flex: 1, paddingHorizontal: wp('7%') },
  firstSection: { flex: 1 },
  secondSection: { flex: 4, marginTop: hp('5%') },
  tabularButton: {
    marginVertical: hp('4%'),
    flexDirection: 'row',
    borderRadius: ApplicationStyles.commonBorderRadius(wp('80%')),
    overflow: 'hidden',
    width: wp('80%'),
  },
  tabButton: {
    flex: 1,
    alignSelf: 'center',
    height: hp('7%'),
  },
  submitContainer: {
    marginVertical: hp('5%'),
    backgroundColor: ApplicationStyles.primaryColor.color,
    borderRadius: ApplicationStyles.commonBorderRadius(wp('80%')),
    width: wp('80%'),
    alignSelf: 'center',
    height: hp('7%'),
  },
  submitTitle: { },
});
