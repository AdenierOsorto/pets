import React, { useState, useEffect } from "react";
import { StyleSheet, Text,Dimensions, View , TextInput} from "react-native";
import fetchQuizQuestion from "../api";
import AlbumCard from "../components/AlbumCard";

const { width } = Dimensions.get("screen");

const GameScreen = ({ navigation }) => {
  const [album, setAlbum] = useState([]);
  
  const [newAlbum, setNewAlbum] = useState(false);

  useEffect(() => {
    handlerStart();
  },[]);

  const handlerStart = () => {
    setNewAlbum(0);

    const getAlbum = async () => {
      const newAlbum = await fetchQuizQuestion();
      
      setAlbum(newAlbum);
    };

    getAlbum();
  };
  const newAlbumRestart = () => {
    setNewAlbum(true);
  }

  return (
    <View> 
    
        
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default GameScreen;
