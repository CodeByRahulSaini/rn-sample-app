import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  Text, NavigationBar, TextInput, Button,
} from '../../Components';
import { ApplicationStyles } from '../../Theme';
import UserActions from '../../Stores/User/Actions';
import styles from './SignUpStyle';
import { Validations } from '../../Utils';


class SignUpScreen extends Component {
  static get propTypes() {
    return {
      theme: PropTypes.object.isRequired,
      navigation: PropTypes.func.isRequired,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
    this.validateForm = this.validateForm.bind(this);
    this.updateTextInput = this.updateTextInput.bind(this);
    this.passwordRef = React.createRef();
    this.registerInit = this.registerInit.bind(this);
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

  registerInit() {
    const { registerInit } = this.props;
    const { email, password } = this.state;
    // alert(email)
    if (!this.validateForm(['email', 'password'])) return false;

    registerInit({ email, password });
    return true;
  }


  render() {
    const {
      errors,
    } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <NavigationBar {...navigation} />

        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={styles.subContainer}>
          <View style={styles.firstSection}>
            <Text style={ApplicationStyles.headline}>Signup</Text>
            <Text style={ApplicationStyles.subHeadline}>Lets take first step</Text>
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
              returnKeyType="next"
              onChangeText={text => this.updateTextInput('password', text)}
              onSubmitEditing={() => this.registerInit()}
            />
            <Button
              style={styles.submitContainer}
              titleStyle={styles.submitTitle}
              title="SUBMIT"
              onPress={this.registerInit}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}


SignUpScreen.propTypes = {
  registerInit: PropTypes.func.isRequired,
};

SignUpScreen.defaultProps = {
};

export default connect(null, {
  registerInit: UserActions.registerInit,
})(SignUpScreen);
