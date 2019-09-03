import * as React from "react";
import { View, StyleSheet, StatusBar, ScrollView, Text } from "react-native";
import _ from "lodash";
import { getMatches, competitions } from "../API/index";
import Match from "./Match";

export default class Home extends React.Component {
  state = { matches: [] };
  competitionId = -1;
  async componentDidMount() {
    try {
      const { data } = await getMatches();
      this.setState({ matches: data.data.match });
      //this.interval();
    } catch (error) {
      console.log("error :" + error);
    }
  }
  interval = () => {
    setInterval(async () => {
      try {
        console.log("test");
        const { data } = await getMatches();
        this.setState({ matches: data.data.match });
      } catch (error) {
        console.log("error :" + error);
      }
    }, 5000);
  };
  changerCompetition = (id, competition) => {
    if (this.competitionId != id) {
      this.competitionId = id;
      return (
        <View style={styles.titre}>
          <Text>{competition}</Text>
        </View>
      );
    }
    return null;
  };
  render() {
    const matchlist = this.state.matches.filter(match =>
      competitions.includes(match.competition_id + "")
    );
    const matchListOrdered = _.orderBy(matchlist, ["competition_id"], "asc");
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView style={styles.matchList}>
          {matchListOrdered.map((el, index) => (
            <Match
              navigation={this.props.navigation}
              key={el.id}
              match={el}
              matchApres={matchListOrdered[index + 1] && true}
              changerCompetition={this.changerCompetition}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  titre: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginTop: 8
  }
});
