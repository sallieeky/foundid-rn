import {View, Text, Button} from 'react-native';
import React, {useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';

const BottomSheet = () => {
  const refRBSheet = useRef();

  return (
    <RBSheet
      ref={refRBSheet}
      closeOnPressMask={false}
      height={500}
      closeOnPressBack={true}
      animationType={'none'}
      openDuration={100}
      closeDuration={100}
      customStyles={{
        wrapper: {
          backgroundColor: '#00000030',
        },
        container: {
          borderRadius: 8,
          padding: 16,
        },
      }}>
      <View>
        <Text>Hallo</Text>
        <Button title="close" onPress={() => refRBSheet.current.close()} />
      </View>
    </RBSheet>
  );
};

export default BottomSheet;
