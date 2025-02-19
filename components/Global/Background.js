import React from 'react';
import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';

export default function BackgroundWrapper({ children }) {
  return (
    <ImageBackground
      source={require('../Global/fundo.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.overlay}>{children}</SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',  
    height: '100%', 
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)', 
  },
});

