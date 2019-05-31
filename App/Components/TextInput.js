import * as React from 'react';
import { View, TextInput as RNTextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Text from './Text';
import {
  Colors, ApplicationStyles,
} from '../Theme';

const styles = StyleSheet.create({
  container: { marginTop: hp('1%') },
  textInputStyle: {
    ...ApplicationStyles.textInputValue,
    paddingHorizontal: 0,
    paddingTop: hp('0.5%'),
    paddingBottom: hp('1.5%'),
    borderColor: 'transparent',
    margin: 0,
    borderBottomColor: Colors.mediumDarkFont,
    borderWidth: StyleSheet.hairlineWidth * 2,
  },
});
class TextInput extends React.Component {
  render() {
    const {
      label, numberOfLines, multiline, secureTextEntry, error,
      placeholder, onChangeText, returnKeyType, textInputRef, onSubmitEditing,
    } = this.props;
    return (
      <View style={{ ...styles.container, marginBottom: !error ? hp('1%') : 0 }}>
        <Text style={[{ ...ApplicationStyles.textInputLabel }, { padding: 0 }]}>{label}</Text>
        <RNTextInput
          multiline={multiline}
          numberOfLines={numberOfLines}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          returnKeyType={returnKeyType}
          enablesReturnKeyAutomatically
          ref={textInputRef}
          onSubmitEditing={onSubmitEditing}
          style={styles.textInputStyle}
          underlineColorAndroid="transparent"
        />
        {error && (
        <Text style={[{ ...ApplicationStyles.textInputLabel },
          { ...ApplicationStyles.warningColor }]}
        >
          {error}
        </Text>
        )}
      </View>
    );
  }
}


TextInput.propTypes = {
  secureTextEntry: PropTypes.bool,
  label: PropTypes.string,
  numberOfLines: PropTypes.number,
  multiline: PropTypes.bool,
  returnKeyType: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChangeText: PropTypes.func,
  textInputRef: PropTypes.func,
  onSubmitEditing: PropTypes.func,
};

TextInput.defaultProps = {
  secureTextEntry: false,
  label: '',
  numberOfLines: 1,
  multiline: false,
  placeholder: '',
  error: null,
  onChangeText: Function,
  returnKeyType: '',
  textInputRef: 'input',
  onSubmitEditing: Function,
};

export default TextInput;
