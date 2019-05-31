import PropTypes from 'prop-types';
import React from 'react';
import {
  Text as RNText,
} from 'react-native';

function Text({
  children, style,
}) {
  return (
    <RNText style={[style]}>
      {children}
    </RNText>
  );
}

Text.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.object,
};

Text.defaultProps = {
  style: {},
};


export default Text;
