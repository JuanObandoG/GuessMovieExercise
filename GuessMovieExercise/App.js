import { StatusBar } from 'expo-status-bar';
import React, {Fragment} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './screens/routes'

export default function App() {
  return (<Fragment>
            <StatusBar barStyle="light-content" />
            <Routes />
          </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});


/*'Trebuchet MS'*/
