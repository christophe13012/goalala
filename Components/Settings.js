import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { setInterval } from "../Store/Actions/index";
import SelectionCompetition from "./SelectionCompetition";

const mapStateToProps = state => {
  return { interval: state.interval };
};

const mapDispatchToProps = dispatch => {
  return { setInterval: sec => dispatch(setInterval(sec)) };
};

class Settings extends React.Component {
  onPress = sec => {
    this.props.setInterval(sec);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titre}>Intervalle de mise à jour des scores :</Text>
        <View style={styles.choix}>
          {[30, 60, 90].map(el => {
            return (
              <TouchableOpacity
                onPress={() => this.onPress(el)}
                key={el}
                style={
                  this.props.interval === el
                    ? styles.buttonSelected
                    : styles.button
                }
              >
                <Text
                  style={
                    this.props.interval === el
                      ? styles.textButtonSelected
                      : styles.textButton
                  }
                >
                  {el} secondes
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <SelectionCompetition />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1
  },
  choix: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  titre: {
    marginBottom: 15,
    marginTop: 10,
    fontSize: 20
  },
  button: {
    height: 30,
    width: "30%",
    borderColor: "#311b92",
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: "center"
  },
  buttonSelected: {
    height: 30,
    width: "30%",
    borderColor: "#311b92",
    borderWidth: 2,
    backgroundColor: "#311b92",
    borderRadius: 5,
    marginBottom: 15,
    justifyContent: "center"
  },
  textButton: {
    fontSize: 14,
    color: "#311b92",
    textAlign: "center"
  },
  textButtonSelected: {
    fontSize: 14,
    color: "white",
    textAlign: "center"
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
