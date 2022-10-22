import {Text} from 'react-native';
import React from 'react';
import {globalFont} from '../../assets/style/globalStyle';

const CustomText = ({children, style, bold}) => {
  return (
    <Text
      style={
        bold ? {...globalFont.bold, ...style} : {...globalFont.normal, ...style}
      }>
      {children}
    </Text>
  );
};

export default CustomText;
