import * as React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './DashboardStyle';


function DashboardScreen(props) {
  const { user } = props;
  return (
    <View style={styles.container}>
      <Text>
        Hey
        {' '}
        {user && user.email}
!
      </Text>
    </View>
  );
}

DashboardScreen.propTypes = {
  user: PropTypes.object.isRequired,
};

DashboardScreen.defaultProps = {
};


export default connect(({ user }) => ({ user }), {
})(DashboardScreen);
