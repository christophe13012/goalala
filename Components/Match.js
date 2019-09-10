import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Logs } from "expo";

class Match extends Component {
  state = {};
  displayDetailMatch = match => {
    console.log(match.id);
    this.props.navigation.navigate("MatchDetail", { match: match });
  };
  render() {
    const { match } = this.props;
    const titre = this.props.changerCompetition(
      match.competition_id,
      match.competition_name
    );
    return (
      <View style={styles.main}>
        {titre}
        <View
          style={
            this.props.matchApres ? styles.container : styles.containerChange
          }
        >
          <View style={styles.time}>
            <Text style={styles.text}>
              {isNaN(match.time) ? match.time : match.time + "'"}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.match}
            onPress={() => this.displayDetailMatch(match)}
          >
            <Text style={styles.text}>{match.home_name}</Text>
            <Text style={styles.text}>{match.away_name}</Text>
          </TouchableOpacity>
          <View style={styles.score}>
            <Text style={styles.text}>{match.score[0]}</Text>
            <Text style={styles.text}>{match.score[4]}</Text>
          </View>
          <View style={styles.favori}>
            <Image
              style={styles.image}
              source={require("../Images/unlike.png")}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: { borderBottomWidth: 1, borderBottomColor: "white" },
  container: {
    flexDirection: "row",
    height: 40,
    backgroundColor: "#311b92",
    paddingLeft: 3,
    paddingRight: 3
  },
  containerChange: {
    flexDirection: "row",
    height: 40,
    backgroundColor: "#311b92",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingLeft: 3,
    paddingRight: 3
  },
  time: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center"
  },
  match: {
    width: "75%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 15
  },
  score: {
    width: "5%",
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: "#311b92"
  },
  favori: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: "#311b92"
  },
  image: { height: 20, width: 20 },
  text: { color: "white" }
});

export default Match;
