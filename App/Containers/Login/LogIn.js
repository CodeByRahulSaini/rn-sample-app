import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  Text, TextInput, Button,
} from '../../Components';
import { ApplicationStyles } from '../../Theme';
import UserActions from '../../Stores/User/Actions';
import styles from './LogInStyle';
import { Validations } from '../../Utils';
import ToastService from '../../Services/ToastService';

class LoginScreen extends Component {
  static get propTypes() {
    return {
      navigation: PropTypes.func.isRequired,
    };
  }

  static showToast() {
    ToastService('Lorem ipsum sit amet.');
  }

  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      errors: {},
    };
    this.loginInit = this.loginInit.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.updateTextInput = this.updateTextInput.bind(this);
    this.passwordRef = React.createRef();
  }

  updateTextInput(key, value) {
    this.setState({ [key]: value });
  }

  validateForm(keys = []) {
    const { email, password } = this.state;
    let errors = {};

    if (keys.includes('email') && !Validations.validateEmail(email)) {
      errors = { ...errors, email: 'Email must be valid' };
    }

    if (keys.includes('password') && !Validations.validatePassword(password)) {
      errors = { ...errors, password: 'Enter a valid password' };
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  }

  loginInit() {
    const { loginInit } = this.props;
    const { email, password } = this.state;
    if (!this.validateForm(['email', 'password'])) return false;
    loginInit({ email, password });
    return true;
  }

  render() {
    const { navigation } = this.props;
    const { errors } = this.state;
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={styles.subContainer}>
          <View style={styles.firstSection}>
            <Text style={ApplicationStyles.headline}>Login</Text>
            <Text style={ApplicationStyles.subHeadline}>Get started with your journey</Text>
          </View>
          <View style={styles.secondSection}>
            <TextInput
              error={errors.email}
              label="Email"
              returnKeyType="next"
              onChangeText={text => this.updateTextInput('email', text)}
              onSubmitEditing={() => this.passwordRef.current.focus()}
            />
            <TextInput
              error={errors.password}
              label="Password"
              textInputRef={this.passwordRef}
              returnKeyType="done"
              secureTextEntry
              onSubmitEditing={this.loginInit}
              onChangeText={text => this.updateTextInput('password', text)}
              placeholder="Enter between 6 to 18 characters"
            />
            <Button
              style={styles.loginContainer}
              titleStyle={styles.loginTitle}
              onPress={this.loginInit}
              title="CONTINUE TO LOGIN"
            />

            <View style={styles.signUpLinkContainer}>
              <Text style={{ ...ApplicationStyles.info }}>Dont have an account? </Text>
              <Button
                style={styles.signUpContainer}
                titleStyle={styles.signUpButton}
                title="Sign Up"
                onPress={() => navigation.navigate('SignUp')}
              />
            </View>
            <Button
              style={styles.toastContainer}
              titleStyle={styles.signUpButton}
              onPress={LoginScreen.showToast}
              title="Show Toast (Custom native module)"
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

LoginScreen.propTypes = {
  loginInit: PropTypes.func.isRequired,
};


export default connect(null, {
  loginInit: UserActions.loginInit,
})(LoginScreen);
