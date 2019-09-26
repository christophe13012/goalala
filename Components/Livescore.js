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
    matches: this.props.matchesAPI,
    apiEnd: false,
    pageHistory: 2,
    next_page: false
  };
  async componentDidMount() {
    try {
      const { data } = await (this.props.recents ? getRecents() : getMatches());
      this.props.saveMatchesAPI(data.data.match);
      const next_page = !data.data.next_page ? false : true;
      this.setState({
        matches: data.data.match,
        apiEnd: true,
        next_page
      });
      if (!this.props.recents) this.interval();
    } catch (error) {
      console.log("error :" + error);
    }
  }
  addcontent = async () => {
    if (this.props.recents && this.state.next_page) {
      let pageHistory = this.state.pageHistory + 1;
      const { data } = await getRecentsByPage(this.state.pageHistory);
      const next_page = !data.data.next_page ? false : true;
      const matches = [...this.state.matches, ...data.data.match];
      this.setState({ matches, pageHistory, next_page });
    }
  };
  interval = () => {
    setInterval(async () => {
      try {
        const { data } = await getMatches();
        this.setState({ matches: data.data.match });
      } catch (error) {
        console.log("error :" + error);
      }
    }, this.props.interval * 1000);
  };
  render() {
    if (!this.props.recents) console.log(this.state.matches);

    let filtered = this.props.favorites
      ? this.state.matches.filter(match => {
          return (
            this.props.matchIdFavori.includes(match.id) &&
            this.props.competitions.includes(match.competition_id)
          );
        })
      : this.state.matches.filter(match => {
          return this.props.competitions.includes(match.competition_id);
        });
    if (this.props.live) {
      filtered = filtered.filter(match => match.status === "IN PLAY");
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
        <StatusBar barStyle="light-content" />
        <ScrollView
          style={styles.matchList}
          onScroll={e => {
            let paddingToBottom = 10;
            paddingToBottom += e.nativeEvent.layoutMeasurement.height;
            if (
              e.nativeEvent.contentOffset.y >=
              e.nativeEvent.contentSize.height - paddingToBottom
            ) {
              this.addcontent();
            }
          }}
        >
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Livescore);
