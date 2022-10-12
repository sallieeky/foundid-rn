import {View, Text} from 'react-native';
import React from 'react';

const RegisterScreenFourth = ({route}) => {
  const {data} = route.params;
  console.log(data);
  return (
    <View>
      <Text>RegisterScreenFourth</Text>
    </View>
  );
};

export default RegisterScreenFourth;
