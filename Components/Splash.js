import React, { Component } from "react";
import { View, StyleSheet, StatusBar, Animated, Text } from "react-native";
import Spinningball from "./SpinningBall";
import * as Animatable from "react-native-animatable";

class Splash extends Component {
  state = {};
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("App");
    }, 4000);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titre}>
          <Animatable.Text animation="zoomInDown" style={styles.titreText}>
            GOALALA !!!
          </Animatable.Text>
          <Animatable.Text style={styles.sousTitre} animation="fadeIn">
            Scores en direct
          </Animatable.Text>
          <Text style={styles.sousTitre}></Text>
        </View>
        <View style={styles.activity}>
          <Spinningball />
        </View>
        <View>
          <Text style={styles.author}>
            Icon made by freepik and turkkub from www.flaticon.com
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#311b92"
  },
  titre: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  titreText: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: 2,
    fontSize: 35,
    marginBottom: 10
  },
  activity: {
    flex: 2
  },
  author: {
    color: "white",
    marginBottom: 10,
    fontSize: 12
  },
  sousTitre: {
    color: "white",
    fontSize: 22
  }
});
export default Splash;
