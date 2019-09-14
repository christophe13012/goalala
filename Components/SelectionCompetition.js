import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
import { getCompetition } from "../API";

class selectionCompetition extends Component {
  state = { pays: [] };
  async componentDidMount() {
    try {
      const { data } = await getCompetition();
      const groupByCompet = this.groupBy("countries");
      const pays = groupByCompet(data.data.competition);
      this.setState({ pays });
      //this.interval();
    } catch (error) {
      console.log("error :" + error);
    }
  }
  groupBy = key => array =>
    array.reduce((objectsByKeyValue, obj) => {
      const value = obj[key];
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
    }, {});
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titre}>Selection compétition et favoris :</Text>
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
  }
});

export default selectionCompetition;
