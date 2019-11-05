import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { setmatchIdFavori } from "../Store/Actions/index";
import moment from "moment";
import "moment/locale/eo"; // without this line it didn't work
moment.locale("eo");

const mapStateToProps = state => {
  return { matchIdFavori: state.matchIdFavori };
};

const mapDispatchToProps = dispatch => {
  return { setmatchIdFavori: matchId => dispatch(setmatchIdFavori(matchId)) };
};

class Match extends Component {
  state = {};
  displayDetailMatch = (match, competition_id) => {
    this.props.navigation.navigate("MatchDetail", {
      match: match
    });
  };
  fav = matchId => {
    this.props.setmatchIdFavori(matchId);
  };
  renderImage(id) {
    if (this.props.recents) return require("../Images/broken-heart.png");

    return this.props.matchIdFavori.includes(id)
      ? require("../Images/like.png")
      : require("../Images/unlike.png");
  }
  getHour = time => {
    if (isNaN(time)) {
      if (time.length === 5) {
        const heureMatchUTC = moment.utc(new Date()).format("L") + "T" + time;
        return moment
          .utc(heureMatchUTC)
          .local()
          .format("LT");
      } else {
        return time;
      }
    } else {
      return time + "'";
    }
  };
  render() {
    const { match, date } = this.props;
    return (
      <View
        style={
          this.props.index === this.props.length - 1
            ? styles.containerChange
            : styles.container
        }
      >
        <View style={styles.time}>
          <Text style={this.props.recents ? styles.date : styles.text}>
            {this.props.recents ? date.slice(0, 5) : this.getHour(match.time)}
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
        <TouchableOpacity
          style={styles.favori}
          onPress={() => this.fav(match.id)}
        >
          <Image style={styles.image} source={this.renderImage(match.id)} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 40,
    backgroundColor: "#311b92",
    paddingLeft: 3,
    paddingRight: 3,
    borderBottomWidth: 1,
    borderBottomColor: "white"
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
    width: "15%",
    alignItems: "center",
    justifyContent: "center"
  },
  match: {
    width: "70%",
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
  text: { color: "white" },
  date: {
    color: "white",
    paddingLeft: 5,
    fontSize: 14
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Match);
