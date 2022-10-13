// import {View, Text, Button, Image} from 'react-native';
// import React, {useState} from 'react';
// import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
// import API from '../config/api';
// import {
//   requestCameraPermission,
//   requestExternalWritePermission,
// } from '../config/permission';

// const TesScreen = () => {
//   const [filePath, setFilePath] = useState();

//   const kirim = async () => {
//     const data = {
//       base64: filePath.base64,
//       uri: filePath.uri,
//       name: filePath.fileName,
//       type: filePath.type,
//     };

//     try {
//       const response = await API.post('/tes/upload', {data});
//       console.log(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const chooseFile = type => {
//     let options = {
//       mediaType: type,
//       maxWidth: 300,
//       maxHeight: 550,
//       quality: 1,
//       includeBase64: true,
//     };
//     launchImageLibrary(options, response => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         alert('User cancelled camera picker');
//         return;
//       } else if (response.errorCode == 'camera_unavailable') {
//         alert('Camera not available on device');
//         return;
//       } else if (response.errorCode == 'permission') {
//         alert('Permission not satisfied');
//         return;
//       } else if (response.errorCode == 'others') {
//         alert(response.errorMessage);
//         return;
//       }
//       console.log('base64 -> ', response.base64);
//       console.log('uri -> ', response.uri);
//       console.log('width -> ', response.width);
//       console.log('height -> ', response.height);
//       console.log('fileSize -> ', response.fileSize);
//       console.log('type -> ', response.type);
//       console.log('fileName -> ', response.fileName);
//       setFilePath(response);
//     });
//   };

//   const openCamera = async () => {
//     let options = {
//       mediaType: 'photo',
//       maxWidth: 300,
//       maxHeight: 550,
//       quality: 1,
//       includeBase64: true,
//     };
//     let isCameraPermitted = await requestCameraPermission();
//     let isStoragePermitted = await requestExternalWritePermission();
//     if (isCameraPermitted && isStoragePermitted) {
//       launchCamera(options, response => {
//         console.log('Response = ', response);

//         if (response.didCancel) {
//           alert('User cancelled camera picker');
//           return;
//         } else if (response.errorCode == 'camera_unavailable') {
//           alert('Camera not available on device');
//           return;
//         } else if (response.errorCode == 'permission') {
//           alert('Permission not satisfied');
//           return;
//         } else if (response.errorCode == 'others') {
//           alert(response.errorMessage);
//           return;
//         }
//         console.log('base64 -> ', response.base64);
//         console.log('uri -> ', response.uri);
//         console.log('width -> ', response.width);
//         console.log('height -> ', response.height);
//         console.log('fileSize -> ', response.fileSize);
//         console.log('type -> ', response.type);
//         console.log('fileName -> ', response.fileName);
//         setFilePath(response);
//       });
//     }
//   };

//   return (
//     <View>
//       <Text>TesScreen</Text>
//       <Button title="Pick Image" onPress={() => chooseFile('photo')} />
//       <Button title="Open Camera" onPress={() => openCamera()} />
//       {filePath ? (
//         <Image
//           source={{uri: filePath.uri}}
//           style={{width: filePath.width, height: filePath.height}}
//         />
//       ) : (
//         <Image source={{uri: ''}} />
//       )}
//       <Button title="Kirim" onPress={kirim} />
//     </View>
//   );
// };

// export default TesScreen;

// import {View, Text, Button} from 'react-native';
// import React, {useEffect} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const TesScreen = () => {
//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     const data = await AsyncStorage.getItem('search');
//     const json = JSON.parse(data);
//     return json;
//   };

//   const setData = async () => {
//     const data = ['tes1', 'tes2'];
//     await AsyncStorage.setItem('search', JSON.stringify(data));
//     getData();
//   };

//   const tambah = async id => {
//     const data = await getData();
//     data.push(id);
//     await AsyncStorage.setItem('search', JSON.stringify(data));
//   };
//   return (
//     <View>
//       <Text>TesScreen</Text>
//       <Button title="ada" onPress={() => tambah('tes3')} />
//     </View>
//   );
// };

// export default TesScreen;

// import {View, Text} from 'react-native';
// import React, {useState} from 'react';
// import CheckBox from '@react-native-community/checkbox';

// const TesScreen = () => {
//   const [toggleCheckBox, setToggleCheckBox] = useState(false);
//   return (
//     <View>
//       <CheckBox
//         disabled={false}
//         value={toggleCheckBox}
//         onValueChange={newValue => setToggleCheckBox(newValue)}
//       />
//       <CheckBox
//         disabled={false}
//         value={toggleCheckBox}
//         onValueChange={newValue => setToggleCheckBox(newValue)}
//       />
//       <CheckBox
//         disabled={false}
//         value={toggleCheckBox}
//         onValueChange={newValue => setToggleCheckBox(newValue)}
//       />
//       <Text>TesScreen</Text>
//     </View>
//   );
// };

// export default TesScreen;

// import {View, Text, Button, Image} from 'react-native';
// import React, {useState} from 'react';
// import ImagePicker from 'react-native-image-crop-picker';
// import API from '../config/api';

// const TesScreen = () => {
//   const [images, setImages] = useState();
//   const open = async () => {
//     const images = await ImagePicker.openPicker({
//       multiple: true,
//       mediaType: 'photo',
//       cropping: true,
//     });

//     let files = [];
//     images.map((image, idx) => {
//       let pathParts = image.path.split('/');
//       files.push({
//         uri: image.path,
//         type: image.mime,
//         name: pathParts[pathParts.length - 1],
//       });
//     });

//     let formData = new FormData();
//     formData.append('file', files);

//     const response = await API.post('/tes/upload', {data: formData});
//     console.log(response.data);
//   };

//   return (
//     <View>
//       <Text>TesScreen</Text>
//       <Button title="Pick Photos" onPress={open} />
//       {/* {images && (
//         <Image
//           source={{uri: images.path}}
//           style={{width: '100%', height: '100%', marginBottom: 8}}
//         />
//       )} */}
//       {/* {images &&
//         images.map((image, i) => (
//           <Image
//             key={i}
//             source={{uri: image.path}}
//             style={{width: '100%', height: '100%', marginBottom: 8}}
//           />
//         ))} */}
//     </View>
//   );
// };

// export default TesScreen;

// import {View, Text, ScrollView} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import API from '../config/api';

// const FetchComponent = ({
//   fetchData,
//   DataComponent,
//   NullComponent,
//   NoConnectionComponent,
//   LoadingComponent,
// }) => {
//   const [data, setData] = useState({
//     data: null,
//     total: null,
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [connectionError, setConnectionError] = useState();

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetchData;
//       setData(response.data);
//       setConnectionError(false);
//     } catch (e) {
//       setConnectionError(true);
//     }
//     setIsLoading(false);
//   };

//   return (
//     <View>
//       {/* NULL */}
//       {data.total === 0 && <NullComponent />}
//       {/* DATA NOT NULL */}
//       {data.data && data.total !== 0 && <DataComponent data={data.data} />}
//       {/* CONNECTION ERROR */}
//       {connectionError && <NoConnectionComponent />}
//       {/* LOADING */}
//       {isLoading && <LoadingComponent />}
//     </View>
//   );
// };

// const NullComponent = () => (
//   <View>
//     <Text>No Data</Text>
//   </View>
// );
// const DataComponent = ({data}) => (
//   <View>
//     <Text>DATANYA ADALAH : {JSON.stringify(data)}</Text>
//   </View>
// );
// const NoConnectionComponent = () => (
//   <View>
//     <Text>No connection</Text>
//   </View>
// );
// const LoadingComponent = () => (
//   <View>
//     <Text>Loading</Text>
//   </View>
// );

// const TesScreen = () => {
//   return (
//     <View>
//       <FetchComponent
//         fetchData={API.post('/tes/response')}
//         NoConnectionComponent={NoConnectionComponent}
//         DataComponent={DataComponent}
//         LoadingComponent={LoadingComponent}
//         NullComponent={NullComponent}
//       />
//     </View>
//   );
// };

// export default TesScreen;

import {View, Text} from 'react-native';
import React from 'react';
import FetchComponent from '../components/FetchComponent/FetchComponent';
import API from '../config/api';

const NullComponent = () => (
  <View>
    <Text>No Data</Text>
  </View>
);
const DataComponent = ({data}) => (
  <View>
    <Text>DATANYA ADALAH : {JSON.stringify(data)}</Text>
  </View>
);
const NoConnectionComponent = () => (
  <View>
    <Text>No connection</Text>
  </View>
);
const LoadingComponent = () => (
  <View>
    <Text>Loading</Text>
  </View>
);

const TesScreen = () => {
  return (
    <View>
      <FetchComponent
        fetchData={API.post('/tes/response')}
        NoConnectionComponent={NoConnectionComponent}
        DataComponent={DataComponent}
        LoadingComponent={LoadingComponent}
        NullComponent={NullComponent}
      />
    </View>
  );
};

export default TesScreen;
