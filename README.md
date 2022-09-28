# FOUND.ID

found.id merupakan aplikasi pencarian barang hilang berbasis mobile yang dibuat menggunakan react native dan laravel sebagai backend

## Cara Penginstallan

1. clone repository
2. masuk ke repo terus ketikan : npm install
3. jalankan dengan mengetik : npm run android

## Setting React Native Geocoder

1. buka node_modules/react-native-geocoder/android/build.gradle
2. ubah compile pada dependencies menjadi implementation
   contoh
   dependencies {
   implementation fileTree(include: ['*.jar'], dir: 'libs')
   implementation "com.facebook.react:react-native:+"
   }
