import * as React from "react";
import { Text, View, StyleSheet, Image, Span } from "react-native";
import { getDetailMatch } from "../API/index";

export default class MatchDetail extends React.Component {
  state = { event: [] };
  async componentDidMount() {
    const { data } = await getDetailMatch(
      this.props.navigation.state.params.match.id
    );
    this.setState({ event: data.data.event });
  }
  renderImage(event) {
    switch (event) {
      case "YELLOW_CARD":
        return (
          <Image
            style={styles.image}
            source={require("../Images/yellow-card.png")}
          />
        );
      case "RED_CARD":
        return (
          <Image
            style={styles.image}
            source={require("../Images/red-card.png")}
          />
        );
      case "GOAL":
        return (
          <Image
            style={styles.image}
            source={require("../Images/soccerball.png")}
          />
        );
      case "GOAL_PENALTY":
        return (
          <Image
            style={styles.image}
            source={require("../Images/penalty.png")}
          />
        );
      case "OWN_GOAL":
        return <Text>OG</Text>;
      default:
        break;
    }
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
        {this.state.event.map(event => {
          return event.home_away === "h" ? (
            <View style={styles.eventView} key={event.id}>
              <View style={styles.minutes}>
                <Text style={styles.textMinutes}>
                  {isNaN(event.time) ? event.time + "'" : event.time}
                </Text>
              </View>
              <View style={styles.imageAction}>
                {this.renderImage(event.event)}
              </View>
              <View style={styles.player}>
                <Text style={styles.text}>{event.player}</Text>
              </View>
              <View style={styles.null}></View>
            </View>
          ) : (
            <View style={styles.eventView} key={event.id}>
              <View style={styles.minutes}>
                <Text style={styles.textMinutes}>
                  {isNaN(event.time) ? event.time + "'" : event.time}
                </Text>
              </View>
              <View style={styles.null}></View>
              <View style={styles.imageAction}>
                {this.renderImage(event.event)}
              </View>
              <View style={styles.player}>
                <Text style={styles.text}>{event.player}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginTop: 20,
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
  minutes: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center"
  },
  textMinutes: { fontSize: 14, color: "white" },
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
    color: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  eventView: {
    flexDirection: "row",
    backgroundColor: "#311b92",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "white"
  },
  imageAction: {
    width: "10%"
  },
  text: {
    color: "white",
    fontSize: 12
  },
  null: {
    width: "40%"
  },
  image: {
    width: 20,
    height: 20
  },
  player: {
    width: "40%"
  }
});
