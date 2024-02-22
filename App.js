import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, ImageBackground } from "react-native";
import Helloworld from "./component/Helloworld";
import Username from "./component/Username";
import Counter from "./component/Counter";

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Helloworld />
          <Username />
          <Counter />
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 2,
    paddingBottom: 100,
    opacity: 0.9,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
