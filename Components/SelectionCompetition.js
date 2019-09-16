import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { competitionliste } from "../API";
import { ScrollView } from "react-native-gesture-handler";
import _ from "lodash";
import { toggleCompetitions } from "../Store/Actions";

const mapDispatchToProps = dispatch => {
  return {
    toggleCompetitions: competitions =>
      dispatch(toggleCompetitions(competitions))
  };
};

class selectionCompetition extends Component {
  handleSelectCompet = pays => {
    const competitions = [];
    competitionliste.forEach(compet => {
      if (compet.pays === pays) competitions.push(compet.idcompet);
    });
    this.props.toggleCompetitions(competitions);
  };
  render() {
    const pays = _.orderBy(competitionliste, ["pays"], "asc");
    // const grouped = _.groupBy(pays, pay => pay.pays);
    return (
      <View style={styles.container}>
        <Text style={styles.titre}>Selection des pays :</Text>
        <ScrollView>
          {pays.map(
            (compet, index) =>
              index === 0 ||
              (pays[index - 1].pays != compet.pays && (
                <View key={index} style={styles.paysContainer}>
                  <Text style={styles.pays}>{_.startCase(compet.pays)}</Text>
                  <TouchableOpacity
                    style={styles.sign}
                    onPress={() => this.handleSelectCompet(compet.pays)}
                  >
                    <Image
                      style={styles.icon}
                      source={require("../Images/plus.png")}
                    ></Image>
                  </TouchableOpacity>
                </View>
              ))
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 7
  },
  titre: {
    marginBottom: 20,
    marginTop: 0,
    fontSize: 20
  },
  paysContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 30,
    backgroundColor: "#311b92",
    borderRadius: 5,
    marginBottom: 2,
    paddingLeft: 15,
    paddingRight: 15
  },
  pays: {
    color: "white",
    flex: 5
  },
  icon: {
    height: 20,
    width: 20
  }
});

export default connect(
  null,
  mapDispatchToProps
)(selectionCompetition);
