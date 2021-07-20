import React from 'react'
import GamePlayScreen from './GamePlayScreen/index';
import GameStateScreen from './GameStateScreen/index'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const StackHomeNavigator = createStackNavigator();

 export default function App() {

  return (<NavigationContainer>
            <StackHomeNavigator.Navigator initialRouteName="GamePlayScreenRoutName" headerMode="none">
                <StackHomeNavigator.Screen
                  name="GamePlayScreen"
                  component={GamePlayScreen}
                />
                <StackHomeNavigator.Screen
                  name="GameStateScreen"
                  component={GameStateScreen}
                />
              </StackHomeNavigator.Navigator>
          </NavigationContainer>);
}