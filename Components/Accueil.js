import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  Text
} from "react-native";

class Accueil extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titre}>
          <Text style={styles.titreText}>Bienvenue sur GOALALA</Text>
        </View>
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="white" />
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
  titreText: { color: "white", fontWeight: "bold", fontSize: 26 },
  activity: {
    flex: 2
  }
});
export default Accueil;
