import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavigationService from '../../Services/NavigationService';
import LogIn from '../Login/LogIn';
import SignUp from '../Signup/SignUp';
import HomePage from '../HomePage/HomePage';
import UserActions from '../../Stores/User/Actions';
import Loader from '../../Components/Loader';
import styles from './RootScreenStyle';
/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */


const AppNav = createAppContainer(createStackNavigator(
  {
    LogIn,
    SignUp,
    HomePage,
  },
  {
    // By default the application will show the this screen
    initialRouteName: 'LogIn',
    headerMode: 'none',
  },
));


class RootScreen extends Component {
  componentDidMount() {
    // Run the startup saga when the application is starting
    const { startup } = this.props;
    startup();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Loader />
        <AppNav
          // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </View>
    );
  }
}


RootScreen.propTypes = {
  startup: PropTypes.func.isRequired,
};

RootScreen.defaultProps = {
};


export default connect(
  null,
  {
    startup: UserActions.startup,
  },
)(RootScreen);
