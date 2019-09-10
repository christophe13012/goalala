import * as React from "react";
import { View, StyleSheet, StatusBar, ScrollView, Text } from "react-native";
import _ from "lodash";
import { getMatches, competitions } from "../API/index";
import Competition from "./Competition";

export default class Home extends React.Component {
  state = { matches: [] };
  async componentDidMount() {
    try {
      const { data } = await getMatches();
      const groupByCompet = this.groupBy("competition_name");
      const matches = groupByCompet(data.data.match);
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
  groupBy = key => array =>
    array.reduce((objectsByKeyValue, obj) => {
      const value = obj[key];
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
    }, {});
  render() {
    const matchListOrdered = _.orderBy(
      this.state.matches,
      ["competition_name"],
      "asc"
    );
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
