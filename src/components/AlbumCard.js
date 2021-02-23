import React from "react";
import { StyleSheet, View, Dimensions,  Text,Image, TouchableOpacity } from "react-native";
const { width } = Dimensions.get("screen");
const AlbumCard = ({
  album,
}) => {
  return (
    <View style= {styles.container}>
      <Text style = {styles.titulo}>{album.title}</Text>
      <Image
        style={styles.tinyLogo}
        source={album.url}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    justifyContent: "center",
    textAlign: "center",
  },
  titulo:{
      borderWidth: 4,
      borderColor: "#414a6b",
      bordeRadius: 30,
      backgroundColor: "#fff", 
      textAlign: "center",
  },
  tinyLogo: {
    width: width * 0.926,
    height: width * 0.926,
    textAlign: "center",
  }
});

export default AlbumCard;
1;
