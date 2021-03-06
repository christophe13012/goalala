import * as React from "react";
import { Text, View, StyleSheet, Image, ActivityIndicator } from "react-native";
import { getDetailMatch } from "../API/index";
import { competitionliste } from "../API/index";

export default class MatchDetail extends React.Component {
  state = { event: [], apiEnd: false };
  async componentDidMount() {
    const { data } = await getDetailMatch(
      this.props.navigation.state.params.match.id
    );
    this.setState({ event: data.data.event, apiEnd: true });
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
        return <Text style={{ color: "orange" }}>OG</Text>;
      default:
        break;
    }
  }
  renderPays(id) {
    const competIndex = competitionliste.findIndex(
      compet => compet.idcompet == id
    );
    const urlFlag = competitionliste[competIndex].urlFlag;
    return <Image source={urlFlag} style={styles.icon} />;
  }

  render() {
    const { match } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <View style={styles.competition}>
          <View style={styles.vide}></View>
          <View style={styles.competition_name}>
            <Text>{match.competition_name}</Text>
          </View>
          <View style={styles.pays}>
            {this.renderPays(match.competition_id)}
          </View>
        </View>
        <View style={styles.match}>
          <Text style={styles.time}>{match.time}</Text>
          <Text style={styles.home_name}>{match.home_name}</Text>
          <Text style={styles.score}>{match.score}</Text>
          <Text style={styles.away_name}>{match.away_name}</Text>
        </View>
        {this.state.event.length === 0 && !this.state.apiEnd ? (
          <View style={styles.activity}>
            <ActivityIndicator size="small" color="#311b92" />
          </View>
        ) : this.state.event.length === 0 && this.state.apiEnd ? (
          <Text style={styles.noMatch}>Aucun evenement dans ce match.</Text>
        ) : (
          this.state.event.map(event => {
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
          })
        )}
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
  competition_name: {
    width: "80%",
    alignItems: "center"
  },
  vide: { width: "10%" },
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
  },
  pays: {
    width: "10%"
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  activity: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  textChargement: {
    marginBottom: 15
  },
  noMatch: {
    marginTop: 10
  }
});
