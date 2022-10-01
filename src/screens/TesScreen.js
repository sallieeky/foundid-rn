import {View, Text, Button, Image} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import API from '../config/api';
import {
  requestCameraPermission,
  requestExternalWritePermission,
} from '../config/permission';

const TesScreen = () => {
  const [filePath, setFilePath] = useState();

  const kirim = async () => {
    const data = {
      base64: filePath.base64,
      uri: filePath.uri,
      name: filePath.fileName,
      type: filePath.type,
    };

    try {
      const response = await API.post('/tes/upload', {data});
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });
  };

  const openCamera = async () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        setFilePath(response);
      });
    }
  };

  return (
    <View>
      <Text>TesScreen</Text>
      <Button title="Pick Image" onPress={() => chooseFile('photo')} />
      <Button title="Open Camera" onPress={() => openCamera()} />
      {filePath ? (
        <Image
          source={{uri: filePath.uri}}
          style={{width: filePath.width, height: filePath.height}}
        />
      ) : (
        <Image source={{uri: ''}} />
      )}
      <Button title="Kirim" onPress={kirim} />
    </View>
  );
};

export default TesScreen;
