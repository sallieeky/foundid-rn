import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = () => {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={{
                uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20190223%2Fourmid%2Fpngtree-vector-house-icon-png-image_695369.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Fhome&tbnid=gAnUv6xM7Y8UdM&vet=12ahUKEwjhnKqoj6H6AhXKjNgFHUQVBXMQMygCegUIARDEAQ..i&docid=YeBDqCg3c1B4LM&w=360&h=360&q=gambar%20home&ved=2ahUKEwjhnKqoj6H6AhXKjNgFHUQVBXMQMygCegUIARDEAQ',
              }}
            />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#1687d1',
          image: (
            <Image
              source={{
                uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20190223%2Fourmid%2Fpngtree-vector-house-icon-png-image_695369.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Fhome&tbnid=gAnUv6xM7Y8UdM&vet=12ahUKEwjhnKqoj6H6AhXKjNgFHUQVBXMQMygCegUIARDEAQ..i&docid=YeBDqCg3c1B4LM&w=360&h=360&q=gambar%20home&ved=2ahUKEwjhnKqoj6H6AhXKjNgFHUQVBXMQMygCegUIARDEAQ',
              }}
            />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
