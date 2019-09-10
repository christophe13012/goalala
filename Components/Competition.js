import React, { Component } from "react";
import { View, StyleSheet, StatusBar, ScrollView, Text } from "react-native";
import Match from "./Match";

class Competition extends Component {
  state = {};
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.titre}>
          <Text>{this.props.competition[0].competition_name}</Text>
        </View>
        {this.props.competition.map((match, index) => (
          <Match
            key={index}
            match={match}
            index={index}
            length={this.props.competition.length}
            navigation={this.props.navigation}
          />
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: { borderBottomWidth: 1, borderBottomColor: "white" },
  titre: {
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginTop: 8
  }
});

export default Competition;
