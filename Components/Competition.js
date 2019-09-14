import React, { Component } from "react";
import { View, StyleSheet, StatusBar, Image, Text } from "react-native";
import Match from "./Match";
import { competitionliste } from "../API/index";

class Competition extends Component {
  state = {};
  formatDate(date) {
    const arr = date.split("");
    return arr[8] + arr[9] + "/" + arr[5] + arr[6] + "/" + arr[2] + arr[3];
  }
  renderPays(id) {
    const competIndex = competitionliste.findIndex(
      compet => compet.idcompet == id
    );
    const urlFlag = competitionliste[competIndex].urlFlag;
    return <Image source={urlFlag} style={styles.icon} />;
  }
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.titre}>
          <Text style={styles.date}>
            {this.formatDate(this.props.competition[0].added)}
          </Text>
          <Text style={styles.titreText}>
            {this.props.competition[0].competition_name}
          </Text>
          <Text style={styles.pays}>
            {this.renderPays(this.props.competition[0].competition_id)}
          </Text>
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
    height: 25,
    backgroundColor: "grey",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginTop: 8,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  titreText: {
    flex: 3,
    textAlign: "center"
  },
  date: {
    flex: 1,
    paddingLeft: 10
  },
  pays: {
    flex: 1
  },
  icon: {
    width: 15,
    height: 15
  }
});

export default Competition;
