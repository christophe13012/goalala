import React from "react";
import Livescore from "./Livescore";

const Live = ({ navigation }) => {
  return <Livescore live={true} navigation={navigation} />;
};

export default Live;
