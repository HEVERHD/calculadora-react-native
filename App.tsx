import { SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import CalcuradoraScreen from './src/screens/CalcuradoraScreen';
import { styles } from './src/theme/appTheme';

export default function App() {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalcuradoraScreen />
    </SafeAreaView>
  );
}
