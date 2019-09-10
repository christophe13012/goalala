import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { getDetailMatch } from "../API/index";

export default class MatchDetail extends React.Component {
  state = { event: [] };
  async componentDidMount() {
    const { data } = await getDetailMatch(
      this.props.navigation.state.params.match.id
    );
    this.setState({ event: data.data.event });
  }
  render() {
    const { match } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <View style={styles.competition}>
          <Text style={styles.competition_name}>{match.competition_name}</Text>
        </View>
        <View style={styles.match}>
          <Text style={styles.time}>{match.time}</Text>
          <Text style={styles.home_name}>{match.home_name}</Text>
          <Text style={styles.score}>{match.score}</Text>
          <Text style={styles.away_name}>{match.away_name}</Text>
        </View>
        <View style={styles.event}>
          {this.state.event.map(event => {
            return event.home_away === "h" ? (
              <View style={styles.eventHome} key={event.id}>
                <Text style={styles.minutes}>{event.time}</Text>
                <Text style={styles.textEvent}>
                  {event.event + " " + event.player}
                </Text>
                <Text style={styles.null}></Text>
              </View>
            ) : (
              <View style={styles.eventAway} key={event.id}>
                <Text style={styles.minutes}>{event.time}</Text>
                <Text style={styles.null}></Text>
                <Text style={styles.textEvent}>
                  {event.event + " " + event.player}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5
  },
  competition: {
    flexDirection: "row",
    backgroundColor: "grey",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 30
  },
  time: { width: "10%", textAlign: "center", color: "white" },
  competition_name: { width: "85%", textAlign: "center" },
  match: {
    flexDirection: "row",
    backgroundColor: "#311b92",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "white"
  },
  minutes: { width: "10%", textAlign: "center", color: "white" },
  home_name: {
    width: "40%",
    textAlign: "center",
    color: "white"
  },
  score: {
    width: "10%",
    color: "white"
  },
  away_name: {
    width: "40%",
    textAlign: "center",
    color: "white"
  },
  event: {
    backgroundColor: "#311b92",
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  eventHome: {
    flexDirection: "row"
  },
  eventAway: {
    flexDirection: "row"
  },
  textEvent: {
    color: "white",
    width: "45%",
    fontSize: 10,
    textAlign: "center"
  },
  null: {
    width: "45%"
  }
});
