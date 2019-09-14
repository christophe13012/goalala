import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { setmatchIdFavori } from "../Store/Actions/index";

const mapStateToProps = state => {
  return { matchIdFavori: state.matchIdFavori };
};

const mapDispatchToProps = dispatch => {
  return { setmatchIdFavori: matchId => dispatch(setmatchIdFavori(matchId)) };
};

class Match extends Component {
  state = {};
  displayDetailMatch = match => {
    this.props.navigation.navigate("MatchDetail", { match: match });
  };
  fav = matchId => {
    this.props.setmatchIdFavori(matchId);
  };
  render() {
    const { match } = this.props;
    return (
      <View
        style={
          this.props.index === this.props.length - 1
            ? styles.containerChange
            : styles.container
        }
      >
        <View style={styles.time}>
          <Text style={styles.text}>
            {isNaN(match.time) ? match.time : match.time + "'"}
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
          <Image
            style={styles.image}
            source={
              this.props.matchIdFavori.includes(match.id)
                ? require("../Images/like.png")
                : require("../Images/unlike.png")
            }
          />
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
    width: "10%",
    alignItems: "center",
    justifyContent: "center"
  },
  match: {
    width: "75%",
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
  text: { color: "white" }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Match);