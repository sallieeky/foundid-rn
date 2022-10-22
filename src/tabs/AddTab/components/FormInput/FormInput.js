import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {globalFont} from '../../../../assets/style/globalStyle';

const FormInput = ({
  style,
  placeholder,
  label,
  value,
  setState,
  objKey,
  error,
  keyboardType,
  icon,
  multiline,
  editable,
  numberOfLines,
}) => {
  return (
    <View style={{marginBottom: 4}}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          style={{
            ...styles.input,
            borderColor: error ? '#FF5959' : '#000000',
            paddingRight: icon ? 48 : 8,
            ...style,
          }}
          keyboardType={keyboardType}
          value={value}
          onChangeText={txt => setState(objKey, txt)}
          multiline={multiline}
          numberOfLines={numberOfLines}
          editable={editable}
        />
        <View style={styles.icon}>{icon}</View>
      </View>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  label: {
    ...globalFont.normal,
  },
  input: {
    ...globalFont.normal,
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 4,
    width: '100%',
  },
  icon: {
    height: '100%',
    width: 48,
    position: 'absolute',
    zIndex: 7,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    ...globalFont.normal,
    color: '#FF595985',
    fontSize: 10,
  },
});
