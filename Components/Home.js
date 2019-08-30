import * as React from "react";
import { Text, View, StyleSheet, Image, StatusBar } from "react-native";
import getMatches from "../API/index";

export default class Home extends React.Component {
  state = { matches: {} };
  async componentDidMount() {
    const result = await getMatches();

    //  this.setState({matches : result})
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.paragraph}>{this.state.matches.success}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center"
  }
});
