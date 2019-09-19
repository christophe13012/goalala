import * as React from "react";
import _ from "lodash";

import Livescore from "./Livescore";

const Favorites = ({ navigation }) => {
  return <Livescore favorites={true} navigation={navigation} />;
};

export default Favorites;
