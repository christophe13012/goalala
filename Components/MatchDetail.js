import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { getDetailMatch } from "../API/index";

export default class MatchDetail extends React.Component {
  async componentDidMount() {
    const response = await getDetailMatch(
      this.props.navigation.state.params.idMatch
    );
    console.log(response);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          match détail {this.props.navigation.state.params.idMatch}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center"
  }
});
