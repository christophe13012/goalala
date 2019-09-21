import * as React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import Livescore from "./Livescore";

const Home = ({ navigation }) => {
  return <Livescore navigation={navigation} />;
};

export default Home;
