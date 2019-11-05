import * as React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  ActivityIndicator,
  Text,
  Image,
  UIExplorerBlock
} from "react-native";
import { connect } from "react-redux";
import _ from "lodash";
import { getMatches, getRecents, getRecentsByPage } from "../API/index";
import Competition from "./Competition";
import { saveMatchesAPI } from "../Store/Actions/index";

const mapStateToProps = state => {
  return {
    competitions: state.competitions,
    matchIdFavori: state.matchIdFavori,
    matchesAPI: state.matchesAPI,
    interval: state.interval
  };
};

const mapDispatchToProps = dispatch => {
  return { saveMatchesAPI: matches => dispatch(saveMatchesAPI(matches)) };
};

class Livescore extends React.Component {
  state = {
    matches: [],
    apiEnd: false,
    error: null
  };
  componentDidMount() {
    this.populateScores();
    this.interval();
  }
  populateScores = async () => {
    try {
      let matches = [];
      if (this.props.recents) {
        matches = await this.getAllRecents();
      } else {
        const { data } = await getMatches();
        matches = data.data.match;
      }
      // this.props.saveMatchesAPI(data.data.match);
      this.setState({
        matches,
        apiEnd: true,
        error: null
      });
    } catch (error) {
      console.log("error :" + error.message);
      this.setState({
        apiEnd: true,
        error: <Text>Une erreur est survenue : {error.message}</Text>
      });
    }
  };
  getAllRecents = async () => {
    let otherPage = true;
    let page = 1;
    let matches = [];
    const auj = new Date();
    auj.setDate(auj.getDate() - 1);
    const hierISO = auj.toISOString().substring(0, 10);
    while (otherPage) {
      try {
        const { data } = await getRecentsByPage(page, hierISO);
        otherPage = !data.data.next_page ? false : true;
        matches = [...matches, ...data.data.match];
        page++;
      } catch (error) {
        console.log("error :" + error.message);
        this.setState({
          apiEnd: true,
          error: <Text>Une erreur est survenue : {error.message}</Text>
        });
      }
    }
    return matches;
  };
  interval = () => {
    setInterval(() => {
      this.populateScores();
    }, this.props.interval * 1000);
  };
  render() {
    let filtered = this.props.favorites
      ? this.state.matches.filter(match => {
          return (
            this.props.matchIdFavori.includes(match.id) &&
            this.props.competitions.includes(match.competition_id)
          );
        })
      : this.state.matches.filter(match => {
          return (
            this.props.competitions.includes(match.competition_id) ||
            this.props.competitions.includes(match.competition_id * 1)
          );
        });
    if (this.props.live) {
      filtered = filtered.filter(
        match =>
          match.status === "IN PLAY" ||
          match.status === "ADDED TIME" ||
          match.status === "HALF TIME BREAK"
      );
    }
    const matches = _.groupBy(filtered, match => match.competition_id);

    const matchListOrdered = _.orderBy(matches, ["competition_name"], "asc");

    return !this.state.apiEnd ? (
      <View style={styles.activity}>
        <Text style={styles.textChargement}>
          Chargement des scores en cours
        </Text>
        <ActivityIndicator size="large" color="#311b92" />
      </View>
    ) : (
      <View style={styles.container}>
        {matchListOrdered.length === 0 &&
          (!this.props.favorites ? (
            <Text style={styles.noMatch}>Désolé, aucun match en cours.</Text>
          ) : (
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginTop: 15,
                paddingLeft: 15
              }}
            >
              <Text>Aucun match favori, pour en ajouter, cliquez sur le </Text>
              <Image
                style={styles.image}
                source={require("../Images/like.png")}
              />
              <Text>dans la liste de matches.</Text>
            </View>
          ))}
        <StatusBar barStyle="light-content" />
        {this.state.error}
        <ScrollView style={styles.matchList}>
          {matchListOrdered.map((el, index) => (
            <Competition
              key={index}
              competition={el}
              recents={this.props.recents}
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
  },
  activity: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textChargement: {
    marginBottom: 15
  },
  noMatch: {
    marginTop: 30
  },
  image: {
    width: 20,
    height: 20,
    marginLeft: 3,
    marginRight: 3
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Livescore);
