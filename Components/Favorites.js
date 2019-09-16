import { connect } from "react-redux";
import * as React from "react";
import { View, StyleSheet, StatusBar, ScrollView, Text } from "react-native";
import _ from "lodash";
import { getMatches, getCompetition } from "../API/index";
import Competition from "./Competition";

const mapStateToProps = state => {
  return {
    matchIdFavori: state.matchIdFavori
  };
};

class Favorites extends React.Component {
  state = { matches: [] };
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
        const { data } = await getMatches();
        this.setState({ matches: data.data.match });
      } catch (error) {
        console.log("error :" + error);
      }
    }, 5000);
  };
  leaveAccueil() {
    setTimeout(() => {
      this.setState({ ecranAccueil: false });
    }, 3000);
  }
  render() {
    const filtered = this.state.matches.filter(match =>
      this.props.matchIdFavori.includes(match.id)
    );
    //   const groupByCompet = this.groupBy("competition_name");
    //  const matches = groupByCompet(filtered);
    const matches = _.groupBy(filtered, match => match.competition_id);
    const matchListOrdered = _.orderBy(matches, ["competition_name"], "asc");

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView style={styles.matchList}>
          {matchListOrdered.map((el, index) => (
            <Competition
              key={index}
              competition={el}
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
