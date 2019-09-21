import React from "react";
import Livescore from "./Livescore";

const Recents = ({ navigation }) => {
  return <Livescore recents={true} navigation={navigation} />;
};

export default Recents;
