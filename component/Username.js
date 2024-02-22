/*Nicko C. Cajes, Ariel Jay Pahuyo, Igor Agageo IT35B-IT73 
This component uses props that takes 3 username and then display it with a greeting text*/
import React from "react";
import { Text, View } from "react-native";

const GreetUser = (props) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          backgroundColor: "black",
          fontWeight: "900",
          fontSize: 12,
        }}
      >
        Hello, I am a member of this team and my name is {props.name}!
      </Text>
    </View>
  );
};

const Username = () => {
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "black",
        opacity: 0.9,
        paddingTop: 20,
        paddingBottom: 20,
        gap: 32,
        borderWidth: 2,
        borderColor: "white",
      }}
    >
      <GreetUser name="Nicko" />
      <GreetUser name="Ariel" />
      <GreetUser name="Igor" />
    </View>
  );
};

export default Username;
