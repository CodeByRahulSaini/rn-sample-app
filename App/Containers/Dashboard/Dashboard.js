import * as React from 'react';
import { View, Text } from 'react-native'; 
import { connect } from 'react-redux';
 
class DashboardScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Hey !</Text>
         
        </View>
      );
    }
}


export default connect(null, { 
  })(DashboardScreen);
  