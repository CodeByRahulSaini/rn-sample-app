import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import NavigationService from '../../Services/NavigationService';
import { View, StatusBar } from 'react-native';
import LogIn from '../../Containers/Login/LogIn';
import SignUp from '../../Containers/Signup/SignUp';
import HomePage from '../../Containers/HomePage/HomePage';
import { connect } from 'react-redux';
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
    initialRouteName: 'HomePage',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  },
));
 
class RootScreen extends Component {
  componentDidMount() {
    // Run the startup saga when the application is starting
    // const { startup } = this.props;
    // startup();
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

const mapStateToProps = state => ({});

 
RootScreen.propTypes = {
};

export default connect(
  mapStateToProps,
  null,
)(RootScreen);
