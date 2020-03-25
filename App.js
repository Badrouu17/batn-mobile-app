import React, { useEffect } from "react";
import Root from "./routes/Root";

import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

const App = () => {
  useEffect(() => {
    async function func() {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font
      });
    }

    func();
  });

  return <Root></Root>;
};

export default App;
