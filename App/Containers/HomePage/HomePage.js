import * as React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { ApplicationStyles } from '../../Theme';
import DashboardScreen from '../Dashboard/Dashboard';
import SettingsScreen from '../Settings/Settings';

const TabNavigator = createBottomTabNavigator({
  Dashboard: DashboardScreen,
  Settings: SettingsScreen,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    // eslint-disable-next-line react/prop-types
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      const IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Dashboard') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        // Sometimes we want to add badges to some icons.
        // You can check the implementation below.
      } else if (routeName === 'Settings') {
        iconName = 'ios-options';
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: ApplicationStyles.primaryColor.color,
    inactiveTintColor: ApplicationStyles.disabledColor.color,
  },
});

TabNavigator.propTypes = {
  focused: PropTypes.bool.isRequired,
  tintColor: PropTypes.string.isRequired,
};

export default createAppContainer(TabNavigator);
