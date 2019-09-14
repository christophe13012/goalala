import Home from "./Home";
import { connect } from "react-redux";
import * as React from "react";
import { View, StyleSheet, StatusBar, ScrollView, Text } from "react-native";
import _ from "lodash";
import { getMatches, getCompetition } from "../API/index";
import Competition from "./Competition";

const mapStateToProps = state => {
  return { matchIdFavori: state.matchIdFavori };
};

class Favorites extends Home {
  state = { matches: [], competition: [] };
  async componentDidMount() {
    try {
      const response = await getCompetition();
      const competition = response.data.data.competition;
      const { data } = await getMatches();
      this.setState({ matches: data.data.match, competition });
      //this.interval();
    } catch (error) {
      console.log("error :" + error);
    }
  }
  render() {
    const filtered = this.state.matches.filter(match =>
      this.props.matchIdFavori.includes(match.id)
    );
    const groupByCompet = this.groupBy("competition_name");
    const matches = groupByCompet(filtered);
    const matchListOrdered = _.orderBy(matches, ["competition_name"], "asc");

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView style={styles.matchList}>
          {matchListOrdered.map((el, index) => (
            <Competition
              key={index}
              competition={el}
              competList={this.state.competition}
              navigation={this.props.navigation}
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

export default connect(mapStateToProps)(Favorites);
