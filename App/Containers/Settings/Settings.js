import * as React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserActions from '../../Stores/User/Actions';
import { Button } from '../../Components';
import styles from './SettingsStyle';


function SettingsScreen(props) {
  const { logoutInit } = props;
  return (
    <View style={styles.container}>
      <Button
        style={styles.loginContainer}
        titleStyle={styles.loginTitle}
        onPress={logoutInit}
        title="Logout"
      />
    </View>
  );
}
SettingsScreen.propTypes = {
  logoutInit: PropTypes.func.isRequired,
};

SettingsScreen.defaultProps = {
};


export default connect(null, {
  logoutInit: UserActions.logoutInit,
})(SettingsScreen);
