import React, { Component } from "react";
import { Animated, Easing } from "react-native";

export default class Spinningball extends Component {
  constructor(props) {
    super(props);
    this.state = { spinAnim: new Animated.Value(0) };
  }
  componentDidMount() {
    Animated.loop(
      Animated.timing(this.state.spinAnim, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ).start();
  }
  render() {
    const spin = this.state.spinAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
    return (
      <Animated.Image
        style={{
          height: 100,
          width: 100,
          transform: [{ rotate: spin }]
        }}
        source={require("../Images/football.png")}
      />
    );
  }
}
