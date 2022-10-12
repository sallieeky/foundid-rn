import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {globalFont} from '../../../../assets/style/globalStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FormInput = ({
  tipe,
  placeholder,
  label,
  value,
  setState,
  objKey,
  error,
  keyboardType,
}) => {
  const [showText, setShowText] = useState(false);

  return (
    <View style={{marginBottom: 8}}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          style={{
            ...styles.input,
            borderColor: error ? '#FF5959' : '#000000',
            paddingRight: tipe === 'password' ? 48 : 8,
          }}
          secureTextEntry={
            tipe === 'password' ? (showText === true ? false : true) : false
          }
          keyboardType={keyboardType}
          value={value}
          onChangeText={txt => setState(objKey, txt)}
          autoCapitalize="none"
        />
        {tipe === 'password' && (
          <Pressable onPress={() => setShowText(!showText)} style={styles.icon}>
            <Ionicons
              name={showText ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color={'#193B67'}
            />
          </Pressable>
        )}
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
    height: 48,
  },
  label: {
    ...globalFont.normal,
  },
  input: {
    ...globalFont.normal,
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 4,
    position: 'absolute',
    width: '100%',
    top: 0,
    bottom: 0,
    zIndex: -1,
  },
  icon: {
    height: '100%',
    width: 48,
    alignSelf: 'flex-end',
    position: 'relative',
    zIndex: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    ...globalFont.normal,
    color: '#FF595985',
    fontSize: 10,
  },
});
