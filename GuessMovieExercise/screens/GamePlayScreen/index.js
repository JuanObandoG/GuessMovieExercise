import React, { useState }  from 'react';
import { View, Text, TextInput , Button, Image, TouchableOpacity } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import GameStyle from './styles'
import {MovieList} from '../../MovieList'

export default function GamePlayScreen({ navigation }){

    const [moviesThatAlreadyAppeared, setmoviesThatAlreadyAppeared] = useState([]);
    const [points, setPoints] = useState(0);
    const [lives, setLives] = useState(3);
    const [userAnswer, setUserAnswer]= useState("");
    const [CurrentMovieID, setCurrentMovieID] = useState(0);

    useFocusEffect(
        React.useCallback(() => {
          // Set Values To Default when the screen is focused
          ChangeMovie();
          setUserAnswer(prevText => prevText = "")
          setPoints(prevpoints => prevpoints = 0);
          setLives(prevLives => prevLives = 3);
    
          return () => {
            //Do something when the screen is unfocused
          };
        }, [])
      );

    function CheckAnswer()
    {
        if(MovieList[CurrentMovieID].MovieName === userAnswer.toLowerCase())
        {
            setPoints(prevpoints => prevpoints+1);

            if(points >= 2)
            {
                navigation.navigate('GameStateScreen', {GameState: "You did it! Hooray!", NameOfClass: "VictoryStyle"})
            }
            else
            {
                ChangeMovie();
            }
        }
        else
        {
            setLives(prevLives => prevLives-1);
            if(lives <= 1)
            {
                navigation.navigate('GameStateScreen', {GameState: "You lose! Try again next time", NameOfClass: "DefeatStyle"})
            }
        }
    }

    function ChangeMovie()
    {
        let PreviousMovieID = CurrentMovieID;
        let NewMovieID = Math.floor(Math.random() * ((MovieList.length-1) - 0 + 1)) + 0;
        moviesThatAlreadyAppeared.push(PreviousMovieID);
        setmoviesThatAlreadyAppeared([...new Set(moviesThatAlreadyAppeared)]);

        if(moviesThatAlreadyAppeared.some(IDs => IDs === NewMovieID))
        {
            ChangeMovie(); 
        }
        else
        {
            setCurrentMovieID(prevMovieID => prevMovieID = NewMovieID);
        }
    }


    return (<View style = {GameStyle.generalStyle}>
                <View style = {GameStyle.upperPartStyle}>
                    <View style = {GameStyle.scoreAreaStyle}>
                    <Text style = {GameStyle.scoreTextStyle}>score:</Text>
                    <Text style = {GameStyle.scoreTextStyle}>{points}</Text>
                    </View>
                    <View style = {GameStyle.livesAreaStyle}>
                    <Text style = {GameStyle.livesTextStyle}>lives:</Text>
                    <Text style = {GameStyle.livesTextStyle}>{lives}</Text>
                    </View>
                </View>
                <Text style = {GameStyle.titleStyle}>Can you guess the movie?</Text>
                <Text style = {GameStyle.emojiStyle}>{MovieList[CurrentMovieID].emoji}</Text>
                <TextInput 
                    style = {GameStyle.inputStyle} 
                    onChangeText = {currentText => setUserAnswer(prevText => prevText = currentText)}
                />
                <TouchableOpacity onPress={CheckAnswer}>
                    <Image source={require("../../assets/checkAnswer.png")} resizeMode="contain" style={GameStyle.buttonStyle}/>
                </TouchableOpacity>
            </View>);
}