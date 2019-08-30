import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { setInterval } from "../Store/Actions/index";

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
        <Text style={styles.paragraph}>
          Intervalle de mise à jour des scores :
        </Text>
        {[5, 15, 35, 60].map(el => {
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
    fontSize: 20,
    textAlign: "center"
  },
  button: {
    padding: 10,
    width: 200,
    borderColor: "#311b92",
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 15
  },
  buttonSelected: {
    width: 200,
    padding: 10,
    borderColor: "#311b92",
    borderWidth: 2,
    backgroundColor: "#311b92",
    borderRadius: 5,
    marginBottom: 15
  },
  textButton: {
    fontSize: 20,
    color: "#311b92",
    textAlign: "center"
  },
  textButtonSelected: {
    fontSize: 20,
    color: "white",
    textAlign: "center"
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
