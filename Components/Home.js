import * as React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  ActivityIndicator,
  Text
} from "react-native";
import { connect } from "react-redux";
import _ from "lodash";
import { getMatches, getCompetition } from "../API/index";
import Competition from "./Competition";
import Accueil from "./Accueil";

const mapStateToProps = state => {
  return {
    competitions: state.competitions
  };
};

class Home extends React.Component {
  state = { matches: [], ecranAccueil: true };
  async componentDidMount() {
    try {
      this.leaveAccueil();
      const { data } = await getMatches();
      const matches = _.groupBy(data.data.match, match => match.competition_id);
      this.setState({ matches });
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
    const matchListOrdered = _.orderBy(
      this.state.matches,
      ["competition_name"],
      "asc"
    );
    //  console.log(this.props.competitions);
    const filtered = matchListOrdered.filter(match => {
      console.log(match[0].competition_id);

      this.props.competitions.includes(match.competition_id);
    });
    //   console.log(matchListOrdered[0], this.props.competitions);

    return this.state.ecranAccueil || this.state.matches.length === 0 ? (
      <Accueil />
    ) : (
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

export default connect(mapStateToProps)(Home);
