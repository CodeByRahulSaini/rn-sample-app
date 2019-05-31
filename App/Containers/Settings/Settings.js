import * as React from 'react';
import { View, StyleSheet } from 'react-native'; 
import UserActions from '../../Stores/User/Actions';
import {
    Text, NavigationBar, TextInput, Button,
  } from '../../Components'; 
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
    Colors, FontSizes, Fonts, FontStyles, ApplicationStyles,
  } from '../../Theme';


import PropTypes from 'prop-types';
  const styles = StyleSheet.create({
    loginContainer: {
      marginTop: hp('5%'),
      backgroundColor: ApplicationStyles.primaryColor.color,
      borderRadius: ApplicationStyles.commonBorderRadius(wp('80%')),
      width: wp('80%'),
      alignSelf: 'center',
      height: hp('7%'),
    },
    loginTitle: { },
  });
  
class SettingsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
          <Button
              style={styles.loginContainer}
              titleStyle={styles.loginTitle}
              onPress={this.props.logoutInit}
              title="Logout"
            />
        </View>
      );
    }
}


export default connect(null, {
    logoutInit: UserActions.logoutInit
  })(SettingsScreen);
  