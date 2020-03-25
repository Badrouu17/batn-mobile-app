import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { css } from "@emotion/native";

import ProfileCard from "./profileCard";

const Content = ({ navigation }) => {
  const [profiles, setProfiles] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <FlatList
      contentContainerStyle={container}
      numColumns={2}
      data={profiles}
      renderItem={({ item }) => (
        <ProfileCard navi={name => navigation.navigate(name)}></ProfileCard>
      )}
      keyExtractor={item => item}
    ></FlatList>
  );
};

const container = css`
  padding-top: 20px;
`;

// const itemStyle = css`
//   width: 25%;
//   margin: 5px 15px;
//   padding: 25px 0px;
// `;

export default Content;
