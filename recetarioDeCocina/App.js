/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import ItemReceta from './src/components/ItemReceta'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hola Mundo</Text>
      <ItemReceta />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#545454',
    height: '100%',
  },
});

export default App;
