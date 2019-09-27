import React from "react";
import Livescore from "./Livescore";
import { Text } from "react-native";

const Live = ({ navigation }) => {
  return <Livescore live={true} navigation={navigation} />;
};

export default Live;
