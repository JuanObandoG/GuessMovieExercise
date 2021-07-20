import React, { useState, useEffect}  from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import StateStyle from "./styles"

export default function GameStateScreen({ route, navigation }){

    const { GameState, NameOfClass } = route.params;

    function GoBackToGame()
    {
        navigation.navigate("GamePlayScreen");
    }

    return (<View style = {StateStyle.generalStyle}>
                <Text style={StateStyle[NameOfClass]}>{GameState}</Text>
                <TouchableOpacity onPress={GoBackToGame}>
                    <Image source={require("../../assets/tryAgain.png")} resizeMode="contain" style={StateStyle.tryAgainStyle}/>
                </TouchableOpacity>
            </View>);
}