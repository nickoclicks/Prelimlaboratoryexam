/*Nicko C. Cajes, Ariel Jay Pahuyo, Igor Agageo IT35B-IT73 
This component displays simple introduction of our group with a hello world image below*/
import React from "react";
import { Text, View, Image } from "react-native";

const HelloWorld = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 8,
          color: "white",
          paddingTop: 100,
          backgroundColor: "black",
          opacity: 0.9,
          textAlign: "center",
        }}
      >
        "Welcome to our team's Laboratory Output"
      </Text>
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 30,
          fontStyle: "italic",
          backgroundColor: "black",
          borderWidth: 2,
          borderColor: "white",
        }}
      >
        ORIGINAL IGN!
      </Text>
      <Image
        source={{
          uri: "https://pbs.twimg.com/amplify_video_thumb/1630634001760174092/img/Ulzkh-3LFSGf5et4?format=jpg&name=large",
        }}
        style={{
          width: 350,
          height: 100,
          opacity: 0.9,
          borderWidth: 2,
          borderColor: "green",
        }}
      />
    </View>
  );
};

export default HelloWorld;
