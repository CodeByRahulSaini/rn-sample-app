import React, { Fragment, Component } from 'react';
import {
  View, StyleSheet, ScrollView, ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PropTypes from 'prop-types';
// import CheckBox from 'react-native-checkbox';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  Text, NavigationBar, TextInput, Button,
} from '../../Components';
import {
  Colors, FontSizes, Fonts, FontStyles, ApplicationStyles,
} from '../../Theme';
import UserActions from '../../Stores/User/Actions';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, paddingTop:hp('9%') },
  subContainer: { flex: 1, paddingHorizontal: wp('7%') },
  firstSection: { flex: 1 },
  secondSection: { flex: 4, marginTop: hp('5%') },
  remeberPassContainer: {
    marginVertical: hp('1%'),
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  remeberText: { ...ApplicationStyles.body },
  forgetButton: {
    ...ApplicationStyles.body,

  },
  forgetButtonContainer: { alignSelf: 'center' },
  loginContainer: {
    marginTop: hp('5%'),
    backgroundColor: ApplicationStyles.primaryColor.color,
    borderRadius: ApplicationStyles.commonBorderRadius(wp('80%')),
    width: wp('80%'),
    alignSelf: 'center',
    height: hp('7%'),
  },
  loginTitle: { },
  signUpLinkContainer: {
    width: wp('80%'), marginVertical: hp('2%'), flexDirection: 'row', alignItems: 'center', alignContent: 'center', justifyContent: 'center',
  },
  signUpContainer: { alignSelf: 'center' },
  signUpButton: {
    ...ApplicationStyles.info, ...ApplicationStyles.primaryColor,
  },
});


class LoginScreen extends Component {
  static get propTypes() {
    return {
      navigation: PropTypes.func.isRequired,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: '',
      isChecked: false,
      errors: {},
    };
    this.loginInit = this.loginInit.bind(this);
    TextInput.validateForm = TextInput.validateForm.bind(this);
    TextInput.updateTextInput = TextInput.updateTextInput.bind(this);
    this.passwordRef = React.createRef();
  }


  loginInit() {
    const { loginInit } = this.props;
    const { email, password } = this.state;
    if (!TextInput.validateForm(['email', 'password'])) return false;

    loginInit({ email: email, password });
  }


  render() {
    const { navigation } = this.props;
    const { errors, isChecked } = this.state;
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView style={styles.subContainer}>
          <View style={styles.firstSection}>
            <Text style={ApplicationStyles.headline}>Login</Text>
            <Text style={ApplicationStyles.subHeadline}>Get started with your journey</Text>
          </View>
          <View style={styles.secondSection}>
            <TextInput
              error={errors.email}
              label="Email"
              returnKeyType="next"
              onChangeText={text => TextInput.updateTextInput('email', text)}
              onSubmitEditing={() => this.passwordRef.current.focus()}
            />
            <TextInput
              error={errors.password}
              label="Password"
              textInputRef={this.passwordRef}
              returnKeyType="done"
              secureTextEntry
              onSubmitEditing={this.loginInit}
              onChangeText={text => TextInput.updateTextInput('password', text)}
              placeholder="Enter between 6 to 18 characters"
            /> 
            <Button
              style={styles.loginContainer}
              titleStyle={styles.loginTitle}
              onPress={this.loginInit}
              title="CONTINUE TO LOGIN"
            />
            <View style={styles.signUpLinkContainer}>
              <Text style={{ ...ApplicationStyles.info }}>Don't have an account? </Text>
              <Button
                style={styles.signUpContainer}
                titleStyle={styles.signUpButton}
                title="Sign Up"
                onPress={() => navigation.navigate('SignUp')}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default connect(null, {
  loginInit: UserActions.loginInit,
})(LoginScreen);
