import {View, Text, Button, Image} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import API from '../config/api';

const TesScreen = () => {
  const [filePath, setFilePath] = useState();

  const kirim = async () => {
    let formData = new FormData();
    formData.append('data', {
      base64: filePath.base64,
      uri: filePath.uri,
      name: filePath.fileName,
      type: filePath.type,
    });

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

      // fetch('http://192.168.1.10/tubesProweb/aulThrift/public/api/upload', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      //   body: formData,
      // })
      //   .then(response => response.json())
      //   .then(json => console.log(json))
      //   .catch(e => console.log(e));
    });
  };

  return (
    <View>
      <Text>TesScreen</Text>
      <Button title="Pick Image" onPress={() => chooseFile('photo')} />
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
