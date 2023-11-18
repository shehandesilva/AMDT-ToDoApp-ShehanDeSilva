import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {useEffect} from 'react';
import MainScreen from "./Screens/MainScreen";
import { useFonts } from 'expo-font';

export default function App() {

  return (
      <SafeAreaView style={styles.container}>
          <MainScreen />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
});
