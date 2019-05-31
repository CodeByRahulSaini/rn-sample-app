import * as React from 'react';
import { View, Text } from 'react-native'; 
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { ApplicationStyles } from '../../Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DashboardScreen from '../Dashboard/Dashboard'; 
import SettingsScreen from '../Settings/Settings'; 

const TabNavigator = createBottomTabNavigator({
  Dashboard: DashboardScreen,
  Settings: SettingsScreen,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Dashboard') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        // Sometimes we want to add badges to some icons. 
        // You can check the implementation below.
      } else if (routeName === 'Settings') {
        iconName = `ios-options`;
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor:ApplicationStyles.primaryColor.color,
    inactiveTintColor: ApplicationStyles.disabledColor.color,
  }
});

export default createAppContainer(TabNavigator);

 